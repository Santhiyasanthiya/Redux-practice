// 14 
// Start redux FROM HERE 
// FIRST STORE thaan important
// configure store thaan kodukkanum 
// store create panna reducer pass pannanum but {eppo adtha pannala }
// next go to index.js 

import { configureStore } from "@reduxjs/toolkit" 
import tasksReducer from './slices/taskSlices'

// export const store = configureStore({
//     reducer: {

//     }
// })

//---------------------------------------------------------------
// 19 
// import reducer/slices 
// so reducer ah pass panniyachi 
// console la check panna error edhum show aagathu 
// div tools la check pannanum 
// next go to AddTasx.js
export const store = configureStore({
    reducer: {
          tasks:tasksReducer
    }
})