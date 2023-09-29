import navBar from "./components/nav.js";
import mainContent from "./components/mainContent.js";
import regForm from "./components/regForm.js";
import footer from "./components/footer.js";
import about from "./components/about.js";
import contact from "./components/contact.js";


//for page
function App(page) {
    let output = "<div>";
    if (page !== '') {
        output += navBar();
        if (page === 'home') {
            output += mainContent();
            output += regForm();
        }
        if (page === 'about') {
            output += about();
        }else if (page === 'contact') {
            output += contact();
        }
        output += footer();
    }
    output += "</div>";
    return output;
}
export default App;



