import cteatePostModule from './module/createPost'
import UserModule from './module/userModule'
import getPostModule from './module/getPostModule'
import commentModule from './module/commentModule'
export const state = () => ({
    counter: 0,
    mid: null,
    snackbar: false,
    snackbarText: 'store.state',
    timeout:3000,
    user: null,
    appbarSelected:0
  })
  
  export const mutations = {
    setmid(state,mid) {
      state.mid = mid
    },
    sendSnackbar(state,msg) {
      state.snackbar = true
      state.snackbarText = msg
    },
    SnackbarReset(state) {
      state.snackbar = false
    },
    SetInfo(state,user) {
      state.user=user
    },
    setAppbarSelected(state,newVal){
      state.appbarSelected = newVal
    }
  }
  export const actions={
    async LikeOrNot(stata,data){
      return await new Promise((resolve, reject) => {
         this.$authApi.IsLiked(data).then((result) => {resolve(result.data)}).catch((err) =>{ reject(err)});
      }); 
    },
    async Like(stata,data){
      return await new Promise((resolve, reject) => {
         this.$authApi.LikePost(data).then((result) => {resolve(result.data)}).catch((err) =>{ reject(err)});
      }); 
    },
    async UndoLike(stata,data){
      return await new Promise((resolve, reject) => {
         this.$authApi.UndoLikePost(data).then((result) => {resolve(result.data)}).catch((err) =>{ reject(err)});
      }); 
    }
  }

  export const modules={
    namespace: true,
    cteatePostModule,
    UserModule,
    getPostModule,
    commentModule
  }