import React from 'react';
const styles ={
    width: '100%',
    height: '100%'
}

const LeagueBadge = (props) => {
    const img = props.badge
    return (
        <>
           {
               img.map(img => <img style={styles} src={img.strBadge} alt='' key={img.idLeague}/>)
           }
        </>
    );
};

export default LeagueBadge;