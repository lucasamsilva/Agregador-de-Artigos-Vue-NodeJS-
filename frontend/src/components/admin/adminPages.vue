<template>
  <div class="admin-pages">
    <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastro & Cia" />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs class="m-2">
          <b-tab class="m-3" title="Artigos" active>
            <ArticleAdmin />
          </b-tab>
          <b-tab class="m-3" title="Categoria">
            <CategoryAdmin />
          </b-tab>
          <b-tab class="m-3" title="Usuários">
            <UserAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/pageTitle";
import ArticleAdmin from './articleAdmin'
import CategoryAdmin from './categoryAdmin'
import UserAdmin from './userAdmin'

export default {
  name: "AdminPages",
  components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin}
};
</script>

<style>
</style>