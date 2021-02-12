import React, { Component } from 'react';
import lessonsData from '../static-data/lessonsData';

class Lesson extends Component {
  render() {
    const { history, location } = this.props;
    console.log('history', history);
    console.log('location', location);
    const lessonId = this.props.match.params.lessonId;
    const selectedLesson = lessonsData.find(lesson => {
      return lesson.id === Number(lessonId);
    });

    return <h2>{selectedLesson.description}</h2>;
  }
}

export default Lesson;
