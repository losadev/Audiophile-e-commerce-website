import ButtonShop from "./components/ButtonShop";
import CustomInput from "./components/CustomInput";
import NavBar from "./components/NavBar";
import NumbersButton from "./components/NumbersButton";

export default function Home() {
  return (
    <div className="">
      <NavBar algo="" />
      <h1 className="h1 text-[var(--color-pink)]">HOLA MUNDO</h1>
      <h2 className="h2">H2</h2>
      <h4 className="h4">h4</h4>
      <h5 className="h5">h5</h5>
      <h6 className="h6">h6</h6>
      <p className="overline-app">Overline</p>
      <p className="sub-title">Esto es un subtitulo</p>
      <button className="btn-primary sub-title">BTN PRIMARY</button>
      <button className="btn-secondary sub-title">BTN PRIMARY</button>
      <ButtonShop />
      <CustomInput
        type="text"
        label="Name"
        name="name"
        placeholder="Insert your name here"
      />
      <CustomInput type="radio" name="payment" />
      <NumbersButton />
    </div>
  );
}
