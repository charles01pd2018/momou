const List = ( { 
    id,
    content: {
        mainList: { title: mainListTitle='', listItems: mainListItems=[] },
        subList: { title: subListTitle='', listItems: subListItems=[] },
    },
} ) => {

    return (
        <section id={id} className='list-container'>
            <div className='list-wrapper'>
                    <ul className='main-list-wrapper'>
                        <h2>{mainListTitle}</h2>
                        {
                            mainListItems.map( ( text ) => {
                                return (
                                    <>
                                        <li className='main-list-item'>
                                            {text}
                                        </li>
                                    </>
                                );
                                } )
                        }
                    </ul>

                    <ul className='sub-list-wrapper'>
                        <h2>{subListTitle}</h2>
                        {
                            subListItems.map( ( text ) => {
                                return (
                                    <>
                                        <li className='sub-list-item'>
                                            {text}
                                        </li>
                                    </>
                                );
                            } )
                        }
                    </ul>
            </div>
        </section>
    );
}

export default List;