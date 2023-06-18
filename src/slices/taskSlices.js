import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// 16 
// state mute pandrathathaan reducer nu solluvom 
// slice la 3 important 
//1. initial state
// 2. slice name 
// 3.  Reducer(s)
// action la thaan payload erukkom payload la thaan ella information um erukkum   
 // so payload la erukkura informaion la id um add pannanum  
// spread operater use panni task = {...action.payload,id} call pandrom 
// then state la thaan tasklist erukkum so adhaium call pannanum 

// task push pannum bothu action,payload la erukkura information and id ellam serinthu varum 


//-------------------ADD TO LIST ----------------------
// const initialState = {
//     taskList:[],                  -------> each and every data will store inside the taskList  array 
//     selectedTask:{}
// }

// const taskSlices = createSlice({   
//     name:"taskSlices",
//     ---------------------------------------// ES6 Roles la keyname mum valuvum same ah eruinthaal key name kodukkanum nu avasiyam ella 
//     initialState,
//     reducers:{
//         addTaskToList:(store,action)=>{
//             const id = math.random()* 100
//             let task = {...action.payload,id}
//             state.taskList.push(task)
//         }, 
//     }
// })

//-----------------------------------------------------------------------------------------------------------------------
// 17 
// create REMOVE FORM LIST and UPDATE FORM TASK
// REMOVE FORM LIST filter use panni id ya check pandrom 
// UPDATE FORM TASK  map use panni object id um task id um match aana  payload la erukkura data va show pannanum 
// ellan task ah return pannidum 
//  ------these are all taskList .....taskList ku thevaiyana set up panniyachi 


// const initialState = {
//     tasksList:[],
//     selectedTask:{}
// }

// const taskSlices = createSlice({   
//     name:"tasksSlice",
//     // ES6 Roles la keyname mum valuvum same ah eruinthaal key name kodukkanum nu avasiyam ella 
//     initialState,
//     reducers:{
//         addTaskToList:(state,action) => {
//             const id = math.random() * 100
//             let task = {...action.payload,id}
//             state.tasksList.push(task)
//         }, 
//         //------------------REMOVE FORM LIST-------------------------------------------------
//         removeTaskFormList:(state,action) => {
//             state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
//         },
//         //----------------------UPDATE FORM TASK -----------------------------------
//         updateTaskInList:(state, action)=>{
//             state.tasksList = state.tasksList.map((task) => task.id === action.payload ? action.payload:task)
//         }
    
    
//     }
// })



//---------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------
// 18 
// add, remove, update already panniyachi 
// read pannanumna useselector vachi reacd pannikalam 
// selectedTask:{} porutha varaikkum 2 type erukku 
// 1. update screen pogum bothu enna task nu check pandrathu 
// 2. read mattum thaan pannuvom useSelector la
// ternary operator use panni erukkom 
// Store la eruinthu component ku slices moolama connect panniyachi 
// next go to store.js

// const initialState = {
//     tasksList:[],
//     selectedTask:{}
// }

// const taskSlices = createSlice({   
//     name:"tasksSlice",
//     // ES6 Roles la keyname mum valuvum same ah eruinthaal key name kodukkanum nu avasiyam ella 
//     initialState,
//     reducers:{
//         addTaskToList:(state,action) => {
//             const id = Math.random() * 100
//             let task = {...action.payload,id}
//             state.tasksList.push(task)
//         }, 
//         //------------------REMOVE FORM LIST-------------------------------------------------
//         removeTaskFormList:(state,action) => {
//             state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
//         },
//         //----------------------UPDATE FORM TASK -----------------------------------
//         updateTaskInList:(state, action)=>{
//             state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
//         },
//     setSelectedTask:(state,action)=>{
//         state.selectedTask = action.payload
//     }
    
//     }
// })
// export const {addTaskToList,removeTaskFormList,updateTaskInList,setSelectedTask } = taskSlices.actions
// export default taskSlices.reducer

//---------------------------------------------------------------------------------
// 30 
// import createAsyncThunk


const initialState = {
    tasksList:[],
    selectedTask:{}
}

const taskSlices = createSlice({   
    name:"tasksSlice",
    // ES6 Roles la keyname mum valuvum same ah eruinthaal key name kodukkanum nu avasiyam ella 
    initialState,
    reducers:{
        addTaskToList:(state,action) => {
            const id = Math.random() * 100
            let task = {...action.payload,id}
            state.tasksList.push(task)
        }, 
        //------------------REMOVE FORM LIST-------------------------------------------------
        removeTaskFormList:(state,action) => {
            state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
        },
        //----------------------UPDATE FORM TASK -----------------------------------
        updateTaskInList:(state, action)=>{
            state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
        },
    setSelectedTask:(state,action)=>{
        state.selectedTask = action.payload
    }
    
    }
})
export const {addTaskToList,removeTaskFormList,updateTaskInList,setSelectedTask } = taskSlices.actions
export default taskSlices.reducer