export const UserActions = ({cbfunction}) =>{

    const sortByName = () => {
        cbfunction('name');
    }

    return (
        <div className="UserActions">
            <div className="actionarea">
                <div className="action" onClick={sortByName}>Default</div>
                <div className="action" onClick={()=>cbfunction('name')}>Name</div>
                <div className="action" onClick={()=>cbfunction('age')}>Age</div>
                <div className="action" onClick={()=>cbfunction('rank')}>Rank</div>
                <div className="action" onClick={()=>cbfunction('points')}>Points</div>
            </div>
        </div>
    );
}
