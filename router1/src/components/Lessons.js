import React, { Component } from 'react';
import Lesson from './Lesson';
import { Grid, List, ListItem } from '@material-ui/core';
import lessonsData from '../static-data/lessonsData';
import { NavLink, Route } from 'react-router-dom';

class Lessons extends Component {
  state = {
    test: 0,
    testArray: [],
  };
  render() {
    const { test, testArray } = this.state;
    const links = lessonsData.map(lesson => {
      return (
        <ListItem component='nav' key={lesson.id}>
          <NavLink
            to={{
              pathname: `/lessons/` + lesson.id,
              state: {
                test,
                testArray,
              },
            }}
          >
            {lesson.name}
          </NavLink>
        </ListItem>
      );
    });

    return (
      <Grid container spacing={2}>
        <Grid item>
          <List>{links}</List>
        </Grid>
        <Grid item>
          <Route path='/lessons/:lessonId' component={Lesson}></Route>
        </Grid>
      </Grid>
    );
  }
}

export default Lessons;
