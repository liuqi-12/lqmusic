import axios from "axios"
class LQRequest {
  constructor(option) {
    this.instance = axios.create(option)
    // 配置请求和响应拦截
		this.instance.interceptors.request.use(config => {
			// console.log('来到了request拦截success中');
			// 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

			// 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

			// 3.对请求的参数进行序列化(看服务器是否需要序列化)
			// config.data = qs.stringify(config.data)
			// console.log(config);

			// 4.等等
			return config
		}, err => {
			// console.log('来到了request拦截failure中');
			return err
		})

    this.instance.interceptors.response.use(response => {
			// console.log('来到了response拦截success中');
			return response.data
		}, err => {
			console.log('来到了response拦截failure中');
      console.log(err);
      if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
					default:
						err.message = "其他错误信息"
				}
			}
			return err
		})
  }

  request(option) {
    return new Promise((reslove,reject) => {
      this.instance.request(option).then(res => {
        reslove(res)
      }).catch(err => {
        console.log(err)
      })
    })
  }

  get(url,option) {
    return this.request({url,method: "GET",...option})
  }

  post(url,option) {
    return this.request({url,method: "POST",...option})
  }
}

const lqServer = new LQRequest({
  baseURL: 'http://123.207.32.32:9001/',
	timeout: 10000
})

const WYServer = new LQRequest({
  baseURL: '/api',
	timeout: 10000
})

export default lqServer
export {
  WYServer
}
