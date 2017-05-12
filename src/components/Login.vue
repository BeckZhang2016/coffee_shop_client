<template>
  <Row id="login">
    <Col :md="24">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" :md="6">
      <Form-item prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formInline')" class="split">登录</Button>
        <Button type="ghost" @click="handleCancel()" class="mybuttonstyle split">取消</Button>
      </Form-item>
    </Form>
    <a @click="goFoundPassword">忘记密码...</a>
    <a @click="goRegister">注册</a>
    </Col>
  </Row>
</template>

<script>
  import _ from 'lodash'
  export default {
    name: 'login',
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$http.post('/CustomUsers/userLogin', {email: this.formInline.user, password: this.formInline.password})
              .then(function (response) {
                localStorage.setItem('Authorization', response.email.id);
              })
              .catch(function (response) {
                console.log(response);
              });
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      handleCancel(){
        this.$router.push({name: 'Home'})
      },
      goRegister(){
        this.$router.push({name: 'Register'})
      },
      goFoundPassword(){

      }
    }
  }
</script>

<style scoped>
  #login {
    border: 1px solid #ddd;
    border-radius: 15px;
    box-shadow: 10px 10px 5px #DDD;
    padding: 30px;
    width: 300px;
    margin: 150px auto;
  }

  .mybuttonstyle {
    float: right
  }

  .split {
    width: 45%;
  }

</style>
