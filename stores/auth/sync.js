import { useAuthStore as authStore } from '.'

export const sync= {
   
      syncItem(data){
        const index = this.items.findIndex((e) => e.id === data.id)
        if (index === -1) {
          this.items?.unshift(data)
        } else {
          this.items[index] = data
        }
        // this.items=this.items.map(item=> (item.id===data.id ? {...item, ...data}: item))

      },
      
      syncRequest(request){
        if (request.requestTypeId === 2) {
          //Return request
          if(Array.isArray(this.currentUserDeliveries)){
          this.currentUserDeliveries.forEach((element) => {
            if (element.itemId === request.itemId) {
              element.returnRequest = request
            }
          })
        }
        }
        if (request.requestTypeId === 3) {
          // Replacement request
          if(Array.isArray(this.currentUserDeliveries)){
          this.currentUserDeliveries.forEach((element) => {
            if (element.itemId === request.itemId) {
              element.replaceRequest = request
            }
          })
        }
        }
        const index = this.currentUserRequests.findIndex((e) => e.id === request.id)
        if (index === -1) {
          var userId=authStore().user?.id ?? 0;
          if(userId===request?.userId)
          this.currentUserRequests?.unshift(request)
        } else {
          this.currentUserRequests[index] = request
        }
        //Subordinate update:
        if(Array.isArray(this.subordinatesAndRequests)){
        let subordinateIndex=this.subordinatesAndRequests.findIndex((e)=> e.id===request.userId);
        if(subordinateIndex > -1){
          if(!this.subordinatesAndRequests[subordinateIndex].electronicsRequests?.length) this.subordinatesAndRequests[subordinateIndex].electronicsRequests=[]
          let i = this.subordinatesAndRequests[subordinateIndex].electronicsRequests.findIndex((e)=> e.id===request.id);
          if(i===-1){
            this.subordinatesAndRequests[subordinateIndex].electronicsRequests.unshift(request)
          } else {
            this.subordinatesAndRequests[subordinateIndex].electronicsRequests[i]=request;
          }
        }
      }
      },
      syncAction(data){
        const index = this.requestToManage.actions.findIndex((e) => e.typeId === data.typeId)
        if (index === -1) {
          this.requestToManage.actions?.push(data)
        } else {
          this.requestToManage.actions[index] = data
        }

      },
      syncAssignment(data){
        this.requestToManage.assignment=data;

      },
      syncVote(data){
        this.requestToManage.currentUserVoting=data;
        const index = this.requestToManage.votings.findIndex((e) => e.id === data.id)
        if (index === -1) {
          this.requestToManage.votings?.push(data)
        } else {
          this.requestToManage.votings[index] = data
        }
      },
      syncRequestDelete(id){
        // currentUserRequests
        const index = this.currentUserRequests.findIndex((e) => e.id === id)
            if (index >= 0) {
              this.currentUserRequests.splice(index, 1)
            }
            //Subordinate update:
            if(Array.isArray(this.subordinatesAndRequests)){
            this.subordinatesAndRequests?.forEach((emp)=>{
              let subordinateIndex=emp.electronicsRequests?.findIndex((e)=> e.id===id);
              if(subordinateIndex >= 0){
                emp.electronicsRequests.splice(subordinateIndex,1);
              }
            })
          }
      },
      syncModel(data){
        const index = this.modelsList.findIndex((e) => e.id === data.id)
        if (index === -1) this.modelsList?.push(data)
        else  this.modelsList[index] = data
        
      },
      syncReturnApproval(data){
        const index = this.returnRequests.findIndex((e) => e.id === data.requestId)
        if (index >= 0) {
          this.returnRequests.splice(index, 1)
        }
        //finished
        const finishedindex = this.returnRequestApprovals.findIndex((e) => e.id === data.id)
        if (finishedindex === -1) this.returnRequestApprovals?.push(data)
        else  this.returnRequestApprovals[finishedindex] = data
        
      },
};