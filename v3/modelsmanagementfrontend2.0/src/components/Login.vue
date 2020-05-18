<template>
    <div class="container" id="login" style="margin-top:5px;">
        <div class="card">
            <div class="container">
                <input v-model="username" class="input" type="text" placeholder="Email" style="margin-top:20px;">
            </div>
            <div class="container">
                <input v-model="password" class="input" type="password" placeholder="Password">
            </div>
            <div class="container">
                <button class="button1" @click="login" style="margin:5px; margin-bottom:10px">Login</button>
                <p>{{statusMsg}}</p>                
            </div>
        </div>
    </div>
</template>

<script>
    export default {    
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
                statusMsg: '',
                modelId: '' 
            }
        },
        methods: {
            login() {
                fetch('https://localhost:5001/api/Account/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: this.username,
                        password: this.password
                    }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(res => res.json())
            .then((token) => {
                localStorage.setItem("token", token.jwt);
                if(token.jwt == undefined)
                    this.statusMsg = 'Unsuccessful';
                else
                {                  
                    this.statusMsg = 'Successful';                    
                }
            })
            .catch(error => console.error('Error:', error));
        }
    }
}
</script>


<style scoped>
    .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 500px;
  border-radius: 5px;
  text-align:center;
  background-color:white;
}

    #login {
        display: flex;
        align-items: center;
        justify-content: center;
    }
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.input{
    margin: 5px;
}
.button1 {
  background-color: #2F2FA2; 
  border: none;
  color: white;  
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 8px;
}


</style>
