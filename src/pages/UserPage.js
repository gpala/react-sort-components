import {React, useState} from 'react';
import {usersJSON } from '../data/userdata.js'

export const UserPage = ({sortBy}) =>{

    const [users , setUsers] = useState(usersJSON);

    if (sortBy){
        if ( sortBy === "name" ){
            users.sort(sortUserByName);
        }else if ( sortBy === "age" ){
            users.sort(sortUserByAge);
        }if ( sortBy === "rank" ){
            users.sort(sortUserByRank);
        }if ( sortBy === "points" ){
            users.sort(sortUserByPoints);
        }
    }    

    function sortUserByRank(a, b){
        return a.rank - b.rank;
    }

    function sortUserByName(a, b){
        return a.name.localeCompare(b.name);
    }

    function sortUserByAge(a, b){
        return a.age - b.age;
    }

    function sortUserByPoints(a, b){
        return a.points - b.points;
    }

    return (
        <div className="UsersPage">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rank</th>                        
                        <th>Age</th>                    
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((eachuser) =>{
                        return <tr key={eachuser.name}>
                                <td>{eachuser.name}</td>
                                <td>{eachuser.rank}</td>                                
                                <td>{eachuser.age}</td>
                                <td>{eachuser.points}</td>
                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}