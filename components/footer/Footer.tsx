import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center border" >
      <div className="w-full max-w-[1280px] px-6 py-5">
        <div className="flex flex-wrap gap-6 justify-between">
          <article className="flex flex-col border border-black rounded-md p-4 min-w-[250px]">
            <h1 className="font-bold text-2xl mb-2">Branches</h1>
            <p>Tbilisi: მარშალ გელოვანის გამზ. #22</p>
            <p>Tbilisi: ილია ჭავჭავაძის გამზ. #37მ</p>
            <p>Tbilisi: უნივერსიტეტის ქუჩა #39</p>
            <p>Tbilisi: ოთარ ჭილაძის ქუჩა #9</p>
          </article>

          <article className="flex flex-col border border-black rounded-md p-4 min-w-[200px]">
            <h1 className="font-bold text-2xl mb-2">Pages</h1>
            <p>ჩვენ შესახებ</p>
            <p>კონფიდენციალურობის პოლიტიკა</p>
            <p>წესები და პირობები</p>
          </article>

          <article className="flex flex-col border border-black rounded-md p-4 min-w-[200px]">
            <h1 className="font-bold text-2xl mb-2">Contacts</h1>
            <p>info@agrohub.ge</p>
            <p>+995 032 244 07 07</p>
          </article>
        </div>

        <hr className="my-6 border-black" />

        <div className="flex flex-wrap justify-between gap-4 text-sm">
          <p>© 2025 შპს აგროჰაბი. ყველა უფლება დაცულია.</p>
          <p>ონლაინ მაღაზიის სამუშაო საათებია: 09:00–21:00</p>
        </div>
      </div>
    </footer>
  );
}
