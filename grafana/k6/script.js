import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const url = 'http://host.docker.internal:8080/api/v1/member/signup';  

  const params ={
    headers:{
      'Content-Type': 'application/json',
    }
  }

  for(let i = 1500; i < 20000;i++){

    let body = JSON.stringify({
      email : `string${i}`,
      password : `string${i}`,
      nickname : `string${i}`
    });
    
    http.post(url,body,params);
  }
}

