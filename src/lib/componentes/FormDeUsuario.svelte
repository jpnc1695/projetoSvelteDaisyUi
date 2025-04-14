<script lang="ts">
  import { enhance } from "$app/forms";
  //  let { form }: { form: Actions } = $props();
</script>

<div
  class="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 mx-auto my-10"
>
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold mb-6">Cadastrar Usuário</h2>

    <form method="POST" action="?/register" use:enhance class="space-y-4">
      <!-- Nome da Empresa -->
      <div class="form-control">
        <label class="label" for="username">
          <span class="label-text">UserName*</span>
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Digite o seu nome de usuário"
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
          placeholder="usuario@usuario.com"
          class="input input-bordered"
          required
        />
      </div>

      <div class="form-control">
        <label class="label" for="hashedPassword">
          <span class="label-text">Senha*</span>
        </label>
        <input
          id="hashedPassword"
          name="hashedPassword"
          type="password"
          placeholder="Senha"
          minlength="6"
          class="input input-bordered"
          required
        />
      </div>
      <div class="form-control">
        <label class="label" for="password">
          <span class="label-text">Confirmar Senha*</span>
        </label>
        <input
          id="passwordConfirmed"
          name="passwordConfirmed"
          class="input input-bordered"
          type="password"
          placeholder="Senha"
          minlength="6"
          required
        />
      </div>

      <div class="form-control mt-8">
        <button formaction="?/register" class="btn btn-primary">
          Cadastrar Usuário
        </button>
      </div>
    </form>
  </div>
</div>
