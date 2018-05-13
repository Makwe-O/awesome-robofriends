import React from 'react'
const Card = ({id, name, username, email})=> {
  return (
    <div className="bg-light-purple dib br2 ma2 pa3 grow tc bw3 shadow-5">
      <img alt="Awesome pic of friend" src={`https://robohash.org/${id}/?set=set2`}/>
      <h2>{name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
}
export default Card;
