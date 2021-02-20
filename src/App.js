import React from 'react';
// components
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import Button from './components/Button/Button';
import PostsList from './components/PostsList/PostsList';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <Headline
                    title="Random Title"
                    description="Random description"
                />
                <Button />
                <PostsList />
            </div>
        </React.Fragment>
    );
};

export default App;
