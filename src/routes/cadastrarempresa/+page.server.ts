import type { Actions } from "@sveltejs/kit";
import { db } from "$server/db";
import { empresas } from "$server/schema";
import { fail } from "@sveltejs/kit";
import { generateId } from "lucia";
import { validateCNPJ } from "$lib/utils/validators";
import { eq } from "drizzle-orm";

export const actions:Actions = {

    
  register: async ({ request }) => {
    const formData = await request.formData();

    const data = {
      nome: formData.get("nome") as string,
      cnpj: formData.get("cnpj") as string,
      email: (formData.get("email") as string) || null,
      telefone: (formData.get("telefone") as string) || null,
      endereco: formData.get("endereco") as string,
    };


    if (!data.nome) return fail(400,{message: "Nome é obrigatório"});
    if (!data.cnpj) return fail(400,{message: "CNPJ é obrigatório"});
    if (!data.endereco) return fail(400,{message: "Endereço é obrigatório"});


    if (data.cnpj && !validateCNPJ(data.cnpj)) {
      return fail(400,{message: "CNPJ inválido"});
    }

    // if (Object.keys(erro).length > 0) {
    //   return fail(400, {
    //     message: "Corrija os erros no formulário",
    //     data: data,
    //   });
    // }

    try {
      const cnpjLimpo = data.cnpj.replace(/\D/g, "");
      const empresaId = generateId(7);

      await db.insert(empresas).values({
        id: empresaId,
        nome: data.nome,
        cnpj: cnpjLimpo,
        email: data.email,
        telefone: data.telefone,
        endereco: data.endereco
      });

      const [novaEmpresa] = await db.select()
      .from(empresas)
      .where(eq(empresas.id, empresaId))
      .limit(1);

    return {
      success: true,
      message: 'Empresa cadastrada com sucesso!',
      empresa: novaEmpresa
    };
        
    } catch (error) {

        console.error("Erro ao cadastrar empresas:", error)

      
    }
  },
} satisfies Actions;
