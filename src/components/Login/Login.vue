<template src="./template.html">

</template>

<script>
import SourceService from "@/services/SourceService";
import {AuthHelpers} from "@/helpers/AuthHelpers";



export default {
  name: "LoginPage",
  data() {
    return {
      registrationForm: {
        login: '',
        password: '',
      },
      source: new SourceService({
        endpoint: 'User',
        bindings: {
          login: 'Login'
        }
      })
    }
  },
  methods: {
    _registration() {
        const self = this;
        this.source.create(this.registrationForm).then((result) => {
          if (result.success) {
            self.source.update(result.data).then((result) => {
              if (result.success) {
                const res = result.data;
                AuthHelpers.login(false, res.id, res);
              }
            });
          }
        });
      }
      }
  }
</script>

<style scoped src="./style.less" lang="less">
</style>