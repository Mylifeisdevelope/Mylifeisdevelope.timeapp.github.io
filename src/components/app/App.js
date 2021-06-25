import React, { useState, useEffect } from "react";
import "./App.css";
import AppHeader from "../app-header/AppHeader";
import SearchPanel from "../search-panel/SearchPanel";
import PostStatusFilter from "../post-status-filter/PostStatusFilter";
import PostList from "../post-list/PostList";
import PostAddForm from "../post-add-form/PostAddForm";
import PostListItem from "../post-list-item/PostListItem";
import Navigation from "../navigation/Navigation";
import AboutMe from "../about-me/AboutMe"
import Contacts from "../contacts/Contacts"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  let TimerOptions = new Date().toLocaleTimeString()
  const [time, setTime] = useState(TimerOptions)
  const [isLikedListOn, setIsLikedListOn] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => {
      clearInterval(id);
    }
  }, []);

  const [text, setText] = useState([
    {
      label: "Going to lern React",
      important: true,
      id: 0,
      like: true,
      remove: true,
    },
    {
      label: "That is so good",
      important: false,
      id: 1,
      like: false,
      remove: false,
    },
    {
      label: "I need a break",
      important: false,
      id: 2,
      like: false,
      remove: false,
    },
  ]);

  const [searchValue, setSearchValue] = useState('')

  const [navigatonLinks, setNavigationLInks] = useState([
    {
      name: "App",
      link: "/",
      className: "btn btn-primary active"
    },
    {
      name: "AboutMe",
      link: "/AboutMe",
      className: "btn btn-primary"
    },
    {
      name: "Contacts",
      link: "/Contacts",
      className: "btn btn-primary"
    }
  ])




  const onImportant = (id) => {
    const newArr = text.map((item) => {
      if (item.id === id) {
        item.important = !item.important;
      }
      return item;
    });
    setText(newArr);
  };

  const onLike = (id) => {
    const newArr = text.map((item) => {
      if (item.id === id) {
        item.like = !item.like;
      }
      return item;
    });
    setText(newArr);
  };

  const onRemove = (id) => {
    const newText = text.filter((item) => item.id !== id);
    setText(newText);
  };


  let getLabel;
  const searchFilter = text.filter(item => {
    return item.label.toLowerCase().includes(searchValue.toLowerCase())
  })
  if (isLikedListOn) {
    const likedList = searchFilter.filter((item) => item.like);
    getLabel = likedList.map((item) => {
      return (
        <PostListItem
          key={item.id}
          onLike={() => onLike(item.id)}
          onRemove={() => onRemove(item.id)}
          onImportant={() => onImportant(item.id)}
          label={item.label}
          important={item.important}
          like={item.like}
        />
      );
    });
  }
  if (!isLikedListOn) {
    getLabel = searchFilter.map((item) => {
      return (
        <PostListItem
          key={item.id}
          onLike={() => onLike(item.id)}
          onRemove={() => onRemove(item.id)}
          onImportant={() => onImportant(item.id)}
          label={item.label}
          important={item.important}
          like={item.like}
        />
      );
    });
  }




  const chackId = () => {
    let setId = 0;
    text.forEach((item, index, arr) => {
      if (index === arr.length - 1) {
        setId = item.id;
        ++setId;
        return setId;
      }
      return item;
    });
    return setId;
  };

  const addTextElem = (e) => {
    const value = e.trim();
    if (value !== "") {
      const newObj = {
        label: e,
        important: false,
        id: chackId(),
        like: false,
        remove: true,
      };
      setText((state) => {
        return [...state, newObj];
      });
    }
  };

  const quantityLike = () => {
    const newArr = text.filter((item) => item.like === true);
    return newArr.length;
  };

  const showAll = () => {
    setIsLikedListOn(false);
    console.log("ALL");
  };

  const showLike = () => {
    setIsLikedListOn(true);
  };

  const searchFunc = (e) => {
    setSearchValue(e.target.value)
  }

 
  return (
    <div className="app">
      <AppHeader entry={text.length} likes={quantityLike()} time={time} />
      <div className="search-panel d-flex">
        <SearchPanel searchFunc={searchFunc} placeholder={"Поиск по Записям"} />
        <PostStatusFilter showAll={showAll} showLike={showLike} />
      </div>
      <PostList getLabel={getLabel} />
      <PostAddForm addTextElem={addTextElem} />
      <Router>
        <Navigation li={navigatonLinks} />
        <Switch>
          <Route path='/App'>App</Route>
          <Route path='/AboutMe'> <AboutMe /></Route>
          <Route path='/Contacts'> <Contacts /></Route>
        </Switch>
      </Router>

    </div>


  );
}

export default App;
