import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { updateTaskInList } from "../slices/taskSlices";
import { useDispatch } from "react-redux";
// ---------------------------------------------------------------------------------------------
// 11.
// create updateTask rafce given and go to bootstrap
// https://react-bootstrap.netlify.app/docs/components/modal/
// use the modal here and variable name also MyVerticallyCenteredModal given
// next go to TaskList.js

// const MyVerticallyCenteredModal = (props) => {
//   return (

//           <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//          </Modal>

//   )
// }

// export default MyVerticallyCenteredModal

//-----------------------------------------------------------------------------------------
// 13
// MODEL RETURN LA POTTATHUKKU APRAM
// PREVIOUS modul.body la erukkuratha removie pannitu add tyask la eruintha dorm ah kondu vanthom
// addTask la panna mathiri title and description const la podanum
// so UI COMPLETE AAGIDUCHI
// NEXT create Store.js   go to Store.js component

// const MyVerticallyCenteredModal = (props) => {
//     const [title, setTitle] = useState("")
//     const [description, setDescription] = useState("")

//     const updateTask = ()=> {
//         props.onHide()
//     }
//     return (

//             <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//           Update Task
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Task Title</Form.Label>
//           <Form.Control type="text" placeholder="Enter text Title"
//            value={title} onChange={(e)=>setTitle(e.target.value)}/>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Task Description</Form.Label>
//           <Form.Control type="text" placeholder="Enter Task Description"
//            value={description} onChange={(e)=>setDescription(e.target.value)}/>
//         </Form.Group>

//       </Form>
//         </Modal.Body>
//         <Modal.Footer>

//           <div className='text-end' >
//        <Button variant="primary" type="submit" onClick={(e)=> updateTask(e)}>
//           Update Task
//         </Button>
//        </div>
//         </Modal.Footer>
//            </Modal>

//     )
//   }

//   export default MyVerticallyCenteredModal

//------------------------------------------------------------------------------------------------------------
// 26
// update icon click panna show aaganum
// update task la initial value set pannanum
// 1. state enna erukkunu read pannanum (enna value erukkunu pakkurathu )
// do read panna useSelector use pannanum
// entha id ya update pandramo adhaium call pannanum so  id um kodukkanum selectedTask la id um erukku adhanala
// taskList la button la updateTask la (task) nu erukka nu check pannanum
// useEffect use pannanum
// useEffect initial ah load aagum bothu empty ya erukkum
// so useEffect value eruintha mattum show pannanum
// so give if else condition

// const MyVerticallyCenteredModal = (props) => {
//   const { selectedTask } = useSelector((state) => state.tasks);

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [id, setId] = useState(0);

//   const updateTask = () => {
//     props.onHide();
//   };

//   // selected task click pannumbothu value eruintha show pannanum

//   useEffect(() => {
//     if (Object.keys(selectedTask).length !== 0) {
//       setTitle(selectedTask.title);
//       setDescription(selectedTask.description);
//       setId(selectedTask.id);
//     }
//   }, [selectedTask]);

//   // eppolam change pandramo appollam excute aagum
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Update Task
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Task Title</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter text Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Task Description</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter Task Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <div className="text-end">
//           <Button
//             variant="primary"
//             type="submit"
//             onClick={(e) => updateTask(e)}
//           >
//             Update Task
//           </Button>
//         </div>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default MyVerticallyCenteredModal;

//--------------------------------------------------------------------------------------------------------------------------------------
// 27 
// updateTask la editpannathukku apram update button click panna answer fic aaganum 
// update pandrom na state change aagum so reducers valiya thaan action create pannanum  
// import update and dispatch
// give  dispatch(updateTaskInList({id,title,description})) value update aagum 
// next go  to TaskList 

const MyVerticallyCenteredModal = (props) => {

  const { selectedTask } = useSelector((state) => state.tasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const updateTask = () => {
    props.onHide();
    dispatch(updateTaskInList({id,title,description}))
  };

  // selected task click pannumbothu value eruintha show pannanum

  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setId(selectedTask.id);
    }
  }, [selectedTask]);

  // eppolam change pandramo appollam excute aagum
  return (
       <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => updateTask(e)}
          >
            Update Task
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
