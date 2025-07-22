

export default function ContactMap() {
  return (
    <section className="p-4 m-10 md:p-8 bg-white border-2 border-blue-500 rounded-lg">
      <h2 className="text-lg md:text-xl font-semibold mb-4">FIND US ON GOOGLE MAP</h2>
      <div className="w-full h-[300px] md:h-[400px] rounded overflow-hidden">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.6338032218327!2d10.502114776046518!3d43.84391107109451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d591f72307a90f%3A0x5dcf3838b59d9276!2sChiesa%20di%20San%20Francesco!5e0!3m2!1sen!2sit!4v1695565485576!5m2!1sen!2sit"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
