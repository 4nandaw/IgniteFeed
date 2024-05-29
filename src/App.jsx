import { useState } from 'react';
import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Pedro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Ana"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </main>
      </div>
    </div>
  )
}

export default App
