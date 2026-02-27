import { Timer } from "./main/timer.tsx";
import { AllInfo } from "./main/allInfo.tsx";
import { PlaceInfo } from "./main/placeInfo.tsx";
import { GiftList } from "./main/giftList.tsx";
import { GuestForm } from "./main/guestForm.tsx";
import { Leading } from "./main/leading.tsx";
function App() {
  return (
    <>
      <div className="bg-[#FBF8F1] -z-20">
        <AllInfo />
        <GuestForm />
        <PlaceInfo />
        <Timer />
        <GiftList />
        <Leading />
      </div>
    </>
  )
}

export default App
