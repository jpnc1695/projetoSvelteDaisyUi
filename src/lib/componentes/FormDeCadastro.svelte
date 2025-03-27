
<script>
    let empresa = {
      nome: '',
      cnpj: '',
      email: '',
      telefone: '',
      endereco: '',
      ramo: ''
    };
  
    function handleSubmit() {
      alert(`Empresa cadastrada:\n${JSON.stringify(empresa, null, 2)}`);
      // Aqui você faria a submissão para seu backend
    }
  </script>
  
  <div class="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 mx-auto my-10">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-6">Cadastrar Empresa</h2>
      
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <!-- Nome da Empresa -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nome da Empresa*</span>
          </label>
          <input
            type="text"
            placeholder="Digite o nome completo"
            class="input input-bordered"
            bind:value={empresa.nome}
            required
          />
        </div>
  
        <!-- CNPJ -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">CNPJ*</span>
          </label>
          <input
            type="text"
            placeholder="00.000.000/0000-00"
            class="input input-bordered"
            bind:value={empresa.cnpj}
            required
          />
        </div>
  
        <!-- Email -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email*</span>
          </label>
          <input
            type="email"
            placeholder="contato@empresa.com"
            class="input input-bordered"
            bind:value={empresa.email}
            required
          />
        </div>
  
        <!-- Telefone -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">Telefone</span>
          </label>
          <input
            type="tel"
            placeholder="(00) 00000-0000"
            class="input input-bordered"
            bind:value={empresa.telefone}
          />
        </div>
  
        <!-- Endereço -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">Endereço</span>
          </label>
          <input
            type="text"
            placeholder="Rua, Número, Bairro"
            class="input input-bordered"
            bind:value={empresa.endereco}
          />
        </div>
  
        <!-- Ramo de Atividade -->
        <div class="form-control">
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
        </div>
  
        <div class="form-control mt-8">
          <button type="submit" class="btn btn-primary">
            Cadastrar Empresa
          </button>
        </div>
      </form>
    </div>
  </div>