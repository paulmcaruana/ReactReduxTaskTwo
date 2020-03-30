import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div classname="ui container comments">
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" theirComment="I like this" myAvatar={faker.image.avatar()}/>
        <CommentDetail author="Alex" timeAgo="Today at 2:00AM" theirComment="I love it" myAvatar={faker.image.avatar()}/>
        <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" theirComment="This is great" myAvatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));