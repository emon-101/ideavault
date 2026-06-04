import React from 'react';

const IdeaDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:5000/idea/${id}`);
    const idea = await res.json();
    console.log(idea);
    return (
        <div>
            IdeaDetailsPage
        </div>
    );
};

export default IdeaDetailsPage;