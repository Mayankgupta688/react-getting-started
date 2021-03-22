import HeaderComponent, {userName as customerName, userAge as customerAge, HeaderOtherComponent} from "../components/HeaderComponent";
import SalutationComponent from "../components/SalutationComponent";
import MainComponent from "../components/MainComponent";
import FooterComponent from "../components/FooterComponent";

debugger;
alert(customerName);
alert(customerAge);

function ApplicationComponent() {
    function getData() {
        return "This is a Sample Function with no Paramaters"
    }

    return (
        <div>
            <ApplicationSupportComponent></ApplicationSupportComponent>
            <SalutationComponent inputFunction={getData} userAge="14" userName="Naman Jain"></SalutationComponent>
            <SalutationComponent inputFunction={getData} userAge="13" userName="Siva"></SalutationComponent>
            <SalutationComponent inputFunction={getData} userAge="15" userName="Arpit"></SalutationComponent>
            <SalutationComponent inputFunction={getData} userAge="17" userName="Mayank Gupta"></SalutationComponent>
            <SalutationComponent inputFunction={getData} userAge="18" userName="Ankit Jain"></SalutationComponent>
            <SalutationComponent inputFunction={getData} userAge="19" userName="Aniket Jain"></SalutationComponent>
            <SalutationComponent inputFunction={getData} userAge="14" userName="Meha Jain"></SalutationComponent>
            <HeaderComponent></HeaderComponent>
            <HeaderOtherComponent></HeaderOtherComponent>
            <MainComponent></MainComponent>
            <FooterComponent></FooterComponent>
        </div>
    )
}

export default ApplicationComponent;

function ApplicationSupportComponent() {
    return <h4>I am Support Component</h4>
};
