// import { useAuthStore as authStore } from '@/stores/auth.store'
// import { fetchWrapper } from ''

const baseUrl = "http://localhost:5200";//`${import.meta.env.VITE_API_URL}/api/Electronics`
// const uploadUrl = `${import.meta.env.VITE_API_URL}/api/uploads`

export const query= {
  async getItems(manufacturerId, typeId){
    this.items=await fetchWrapper.get(`${baseUrl}/GetItems/${manufacturerId}/${typeId}`)
  },
  // async getModels(manufacturerId, typeId){
  //   this.models=await fetchWrapper.get(`${baseUrl}/GetModels/${manufacturerId}/${typeId}`)
  // },
  async getResponseTypes() {
    if(!this.responseTypes.length){
    this.responseTypes=await fetchWrapper.get(`${baseUrl}/GetListItems/1`)
    }
  },
  async getVoteClosingReasons() {
    if(!this.voteClosingReasons.length){
    this.voteClosingReasons=await fetchWrapper.get(`${baseUrl}/GetListItems/3`)
    }
  },
  async getManufacturers() {
    if(!this.manufacturers.length){
    this.manufacturers=await fetchWrapper.get(`${baseUrl}/GetListItems/9`)
    }
  },
  async getItemTypes() {
    if(!this.itemTypes.length){
    this.itemTypes=await fetchWrapper.get(`${baseUrl}/GetListItems/10`)
    }
  },
  async getActionTypes() {
    if(!this.actionTypes.length){
    this.actionTypes=await fetchWrapper.get(`${baseUrl}/GetListItems/11`)
    }
  },
  async getSubordinatesAndRequests(typeId) {
    this.subordinatesAndRequests=await fetchWrapper.get(`${baseUrl}/GetSubordinatesAndRequests/${typeId}`)
  },
  async getRequestById(id){
    const request=await fetchWrapper.get(`${baseUrl}/GetRequestById/${id}`);
    this.requestToManage=request;
    return request;
  },
  async getRequests(typeId) {
    this.requests=await fetchWrapper.get(`${baseUrl}/GetRequests/${typeId}`)
  },
  async getCurrentUserDeliveries() {
    this.currentUserDeliveries=await fetchWrapper.get(`${baseUrl}/GetCurrentUserDeliveries`)
  },
  async getCurrentUserRequests() {
    this.currentUserRequests=await fetchWrapper.get(`${baseUrl}/GetCurrentUserRequests`)
  },
  async getModelsList() {
    this.modelsList=await fetchWrapper.get(`${baseUrl}/GetModelsList`)
  },
  async getAttachmentsById(typeId, originId){
    const data=await fetchWrapper.get(`${uploadUrl}/GetElectrAttachments/${typeId}/${originId}`)
    return data;
  },
  async getSubordinatesAndDeliveries(typeId) {
    this.subordinatesAndDeliveries=await fetchWrapper.get(`${baseUrl}/GetSubordinatesAndDeliveries/${typeId}`)
  },
  async getAllRequests(typeId) {
    this.requestsAll=await fetchWrapper.get(`${baseUrl}/GetRequestsAll/${typeId}`)
  },
  async getReturnRequests() {
    this.returnRequests=await fetchWrapper.get(`${baseUrl}/GetReturnRequests`)
  },
  async getReturnRequestApprovals() {
    this.returnRequestApprovals=await fetchWrapper.get(`${baseUrl}/GetReturnRequestApprovals`)
  },
}