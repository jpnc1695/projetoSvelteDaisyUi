<script lang="ts">
  import { enhance } from "$app/forms";
  //  let { form }: { form: Actions } = $props();
</script>

<div
  class="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 mx-auto my-10"
>
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold mb-6">Cadastrar Empresa</h2>

    <form method="POST" action="?/register" use:enhance class="space-y-4">
      <!-- Nome da Empresa -->
      <div class="form-control">
        <label class="label" for="nome">
          <span class="label-text">Nome da Empresa*</span>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Digite o nome completo"
          class="input input-bordered"
          required
        />
      </div>

      <!-- CNPJ -->
      <div class="form-control">
        <label class="label" for="cnpj">
          <span class="label-text">CNPJ*</span>
        </label>
        <input
          id="cnpj"
          name="cnpj"
          type="text"
          placeholder="00.000.000/0000-00"
          class="input input-bordered"
          required
        />
      </div>

      <!-- Email -->
      <div class="form-control">
        <label class="label" for="email">
          <span class="label-text">Email*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="contato@empresa.com"
          class="input input-bordered"
          required
        />
      </div>

      <!-- Telefone -->
      <div class="form-control">
        <label class="label" for="telefone">
          <span class="label-text">Telefone</span>
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          placeholder="(00) 00000-0000"
          class="input input-bordered"
        />
      </div>

      <!-- Endereço -->
      <div class="form-control">
        <label class="label" for="endereco">
          <span class="label-text">Endereço</span>
        </label>
        <input
          id="endereco"
          name="endereco"
          type="text"
          placeholder="Rua, Número, Bairro"
          class="input input-bordered"
        />
      </div>

      <!-- Ramo de Atividade -->
      <!-- <div class="form-control">
          <label class="label">
            <span class="label-text">Ramo de Atividade*</span>
          </label>
          <select class="select select-bordered" bind:value={empresa.ramo} required>
            <option disabled selected value="">Selecione um ramo</option>
            <option>Tecnologia</option>
            <option>Comércio</option>
            <option>Indústria</option>
            <option>Serviços</option>
            <option>Agricultura</option>
            <option>Outros</option>
          </select>
        </div> -->

      <div class="form-control mt-8">
        <button formaction="?/register" class="btn btn-primary">
          Cadastrar Empresa
        </button>
      </div>
    </form>
  </div>
</div>
