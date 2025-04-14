<script lang="ts">
    import { enhance } from "$app/forms";
  </script>
  
  <div
    class="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 mx-auto my-10"
  >
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-6">Logar</h2>
  
      <form method="POST" action="?/login" use:enhance class="space-y-4">
        <div class="form-control">
          <label class="label" for="username">
            <span class="label-text">UserName*</span>
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Digite o UserName"
            class="input input-bordered"
            required
          />
        </div>
  
        <div class="form-control">
          <label class="label" for="password">
            <span class="label-text">Senha*</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Digite a sua Senha"
            class="input input-bordered"
            required
          />
        </div>
  
        <div class="form-control mt-8">
          <button formaction="?/login" class="btn btn-primary"> Logar </button>
        </div>
  
        <div class="text-center mt-4">
          <p class="text-sm text-gray-500">
            Não tem uma conta?
            <a href="/cadastrarusuario" class="link link-primary">Cadastre-se aqui</a>
          </p>
        </div>
      </form>
    </div>
  </div>
  