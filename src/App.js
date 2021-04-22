import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import { Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "./firebase";

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const App = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}></div>
      </Modal>
      <Header />
      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      {posts.map(({ id, post }) => (
        <Post key={id} data={post} />
      ))}
    </div>
  );
};

export default App;
