<template>
  <Row id="register">
    <Col :md="10" class="atuocenter">
    <Form :model="formItem" ref="formItem" :rules="ruleFormItem" :label-width="80">
      <Form-item label="用户名" prop="username">
        <Input v-model="formItem.username" placeholder="用户名"></Input>
      </Form-item>
      <Form-item label="密码" prop="password">
        <Input v-model="formItem.password" placeholder="密码"></Input>
      </Form-item>
      <Form-item label="确认密码" prop="repassword">
        <Input v-model="formItem.repassword" placeholder="确认密码"></Input>
      </Form-item>
      <Form-item label="邮箱" prop="email">
        <Input v-model="formItem.email" placeholder="邮箱"></Input>
      </Form-item>
      <Form-item label="手机号" prop="phone">
        <Input v-model="formItem.phone" placeholder="手机号"></Input>
      </Form-item>
      <Form-item label="性别" prop="gender">
        <Radio-group v-model="formItem.gender">
          <Radio label="nan">男</Radio>
          <Radio label="nv">女</Radio>
        </Radio-group>
      </Form-item>
      <Form-item label="爱好">
        <Checkbox-group v-model="formItem.hobbies">
          <Checkbox label="健身"></Checkbox>
          <Checkbox label="阅读"></Checkbox>
          <Checkbox label="听音乐"></Checkbox>
          <Checkbox label="看电影"></Checkbox>
        </Checkbox-group>
      </Form-item>
      <Form-item>
        <Button type="primary" class="split" @click="handleSubmit('formItem')">提交</Button>
        <Button type="ghost" class="mybuttonstyle split" @click="handleCancel">取消</Button>
      </Form-item>
    </Form>
    </Col>
  </Row>
</template>
<script>

  export default {
    name: 'register',
    data () {
      return {
        formItem: {
          username: '',
          password: '',
          repassword: '',
          email: '',
          phone: '',
          gender: 'nan',
          hobbies: []
        },
        ruleFormItem: {
          username: [
            {required: true, message: 'not Empty', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'not Empty', trigger: 'blur'}
          ],
          repassword: [
            {required: true, message: 'not Empty', trigger: 'blur'}
          ],
          email: [
            {required: true, message: 'not Empty', trigger: 'blur'},
            {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
          ],
          gender: [
            {required: true, message: 'not Empty', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: 'not Empty', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name){
        this.$refs[name].validate((valid)=>{
          if(valid){
            this.$Message.succeed('注册成功')
          }else {
            this.$Message.error('注册失败')
          }
        })
      },
      handleCancel(){
        this.$router.push({name: 'Home'})
      }
    }
  }
</script>
<style scoped>
  #register {
    width: 100%;
    height: 100%;
  }

  .atuocenter{
    border: 1px solid #ddd;
    border-radius: 15px;
    box-shadow: 10px 10px 5px #DDD;
    padding: 30px;
    margin: 20px auto;

  }

  .mybuttonstyle {
    float: right
  }

  .split {
    width: 45%;
  }
</style>
