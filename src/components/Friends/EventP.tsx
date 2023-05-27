export default function EventP(props: any) {
  // P is for Presentation, used in Friends
  const { event, ...rest } = props;
  console.log(event);
  
  return (
    <button
      key={event.id}
      className={
        "flex items-center rounded-lg p-1.5 bg-[#343434] h-[5.125rem] mb-2.5 last:mb-0 w-full"
      }
      {...rest}
    >
      <img
        alt="picturec"
        src={event.photo || 'https://picsum.photos/200'}
        className="w-[4.375rem] h-[4.375rem] rounded-full"
      />
      <div className="flex flex-col items-center justify-between text-left ml-2.5 w-full h-full">
        <h1 className="text-white text-sm font-semibold w-full">
          {event.title}
        </h1>
        <div className="flex justify-between w-full">
          <p className="text-[#007AFF] text-sm">
            @{event.user.username}
          </p>
          <div className="flex">
            <h1 className="text-[#A0A0A0] text-sm mr-1.5">%00min{event.par2}</h1>
            {/* par2 é tempo até o evento começar e par3 é a distância */}
            <h1 className="text-[#32D74B] text-sm">%00km{event.par3}</h1>
          </div>
        </div>
      </div>
    </button>
  );
}
