export default function AdsContainer(props: any) {
  const { adsQuery } = props;
  return (
    <div className="flex">
      <AdComponent ad={adsQuery.left} />
      <div className="w-[0.625rem]"/>
      <AdComponent ad={adsQuery.right} />
    </div>
  );
}
{
  /* <AdComponent
        photo="https://picsum.photos/207"
        title="Va até a loja com 20% de desconto!"
        store="magalu"
        par2="# 2km"
      />
      <div className="w-[0.625rem]" />
      <AdComponent
        photo="https://picsum.photos/208"
        title="Va até a loja com 20% de desconto!"
        store="kabum"
        par1="faltam 11h"
      /> */
}
function AdComponent(props: any) {
  const { ad } = props;
  return (
    <div
      className={`flex flex-col rounded-lg border border-[#A39C00] bg-[#343434] my-2.5 pb-1.5 pt-3 px-1.5`}
    >
      <div className="flex items-center">
        <img
          alt="picture"
          src={ad.photo || "https://picsum.photos/208"}
          className="w-[2.5rem] h-[2.5rem] rounded-full"
        />
        <h2 className="text-[0.625rem] text-[#E2E2E2] pl-1.5">{ad.par0}</h2>
      </div>
      <div className="flex items-center justify-between pt-2">
        <a href="#" className="text-[#007AFF] text-[0.625rem]">
          {ad.par1}
        </a>
        {ad.par2 ? (
          <h2 className="text-[#A0A0A0] text-[0.625rem]">{ad.par2}</h2>
        ) : (
          <h2 className="text-[#32D74B] text-[0.625rem]">{ad.par3}</h2>
        )}
      </div>
    </div>
  );
}
