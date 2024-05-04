import React from "react";


class MyComponent extends React.Component {
    render() {


        const styles = {
            mydivComponent: {
                color: "#61DAFB",
                fontSize: "20px"
            },
            heading: {
                color: "#61DAFB",
                fontSize: "30px"
            }
        };

        return (
            <div style={styles.mydivComponent}>
                <h1 style={styles.heading}>Hello my component by Nguyen The Anh</h1>
            </div>
            // Trả về, render ra 1 khối div là h1 có text là hello 
        );

    }


}
export default MyComponent; // Chỉ trả ra 1
// export {} // Trả ra nhiều

// import React from "react";
// class FullAndShortcutDeclare extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>Shortcut Component</h2>
//                 <h2>Component Shortcut</h2>
//             </div>
//         )
//     }
// }




// export default FullAndShortcutDeclare;