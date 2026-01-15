import { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
  imageUrl?: string;
}

export function MenuCard({ item, onClick, imageUrl }: MenuCardProps) {
  const isWingsCard = ([33, 34, 35, 36].includes(item.id)) && item.prices.length > 1;
  // For Whole Wings (id 33), highlight 3-20 wings
  const highlightWingsSizes = item.id === 33
    ? ["3 Wings", "4 Wings", "6 Wings", "8 Wings", "10 Wings", "15 Wings", "20 Wings"]
    : item.id === 34
      ? ["6 Pcs", "8 Pcs", "10 Pcs", "15 Pcs"]
      : [];

  const isCustomCombo = item.id === 68;

  // Helper to get subtitle for wings cards
  const wingsSubtitle = (item.id === 33 || item.id === 34) ? 'w/Fries & Soda' : null;

  // Use item.imageUrl if present, otherwise fallback to imageUrl prop
  const resolvedImageUrl = item.imageUrl || imageUrl;

  return (
    <button
      onClick={onClick}
      className={`menu-card w-full text-left rounded-2xl bg-[#23201b] shadow-lg border-none p-0 flex flex-col items-stretch justify-stretch ${isWingsCard ? 'lg:col-span-2 xl:col-span-2' : ''} ${isCustomCombo ? 'lg:col-span-2 xl:col-span-2' : ''}`}
      style={{ minWidth: 260, maxWidth: 360, minHeight: 340, maxHeight: 'none' }}
    >
      {/* Image Section */}
      <div className={`relative w-full ${isCustomCombo ? 'aspect-[3/2]' : 'aspect-[4/3]'} min-h-[180px] max-h-[220px] overflow-hidden ${isCustomCombo ? 'rounded-xl' : ''}`}>
        <div 
          className="absolute inset-0 bg-center rounded-t-2xl"
          style={{ 
            backgroundImage: resolvedImageUrl ? `url(${resolvedImageUrl})` : 'none',
            backgroundColor: resolvedImageUrl ? undefined : 'hsl(var(--muted))',
            backgroundSize: item.id === 69 ? 'contain' : 'cover',
            backgroundRepeat: item.id === 69 ? 'no-repeat' : undefined,
          }}
        />
        {/* Item Number Badge */}
        <div className="absolute top-3 left-3 w-9 h-9 flex items-center justify-center bg-[#ff8811] text-white font-bold text-base rounded-full shadow-md">
          {item.id}
        </div>
      </div>

      {/* Content Section */}
      <div className={`p-4 ${(isWingsCard || isCustomCombo) ? 'flex flex-col items-center' : ''} ${isCustomCombo ? 'pb-8 pt-6' : ''} bg-[#23201b] rounded-b-2xl min-h-[120px]`}>
        <h3 className={`font-display ${isCustomCombo ? 'text-4xl mb-4' : isWingsCard ? 'text-3xl' : 'text-2xl'} font-semibold text-[#ff8811] mb-2 text-center`}>
          {[
            "2 Catfish Fillet",
            "2 Tilapia",
            "2 Ocean Perch",
            "2 Whole Jack",
            "2 Jack Fillet",
            "2 Chicken Tenders",
            "4 Whole Wings",
            "4 Jumbo Shrimp",
            "8 Regular Shrimp",
            "Catfish Nuggets",
            "8 Chicken Nuggets"
          ].includes(item.name) ? (
            <span className="font-extrabold">{item.name}</span>
          ) : item.name}
        </h3>
        {/* Orange subtitle for wings cards only */}
        {wingsSubtitle && (
          <div className="bg-orange-500 text-white rounded px-2 py-1 mb-2 text-center text-base font-semibold w-fit mx-auto">
            {wingsSubtitle}
          </div>
        )}
        {/* Removed 'Pick 2 Different Items - served with Fries and Can Soda' for custom combo */}
        {/* Prices */}
        {isWingsCard ? (
          <table className="w-full text-base border-separate border-spacing-y-1">
            <tbody>
              {Array.from({ length: Math.ceil(item.prices.length / 2) }).map((_, rowIdx) => {
                const left = item.prices[rowIdx * 2];
                const right = item.prices[rowIdx * 2 + 1];
                return (
                  <tr key={rowIdx}>
                    <td className={`pr-2 text-muted-foreground whitespace-nowrap text-right font-medium ${highlightWingsSizes.includes(left?.size ?? '') ? 'bg-orange-500 text-white rounded px-2' : ''}`}>{left?.size}</td>
                    <td className="pr-4 text-primary font-bold text-right pl-2">{left ? `$${left.price.toFixed(2)}` : ''}</td>
                    {right ? <>
                      <td className={`pr-2 text-muted-foreground whitespace-nowrap text-right font-medium ${highlightWingsSizes.includes(right.size ?? '') ? 'bg-orange-500 text-white rounded px-2' : ''}`}>{right.size}</td>
                      <td className="text-primary font-bold text-right pl-2">${right.price.toFixed(2)}</td>
                    </> : <><td></td><td></td></>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : isCustomCombo ? (
          <>
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-2xl font-extrabold text-[#ff8811] mb-1">Create Your Combo</h2>
              <div className="text-lg font-bold text-white bg-[#ff8811] rounded px-4 py-1 mb-2">Combo: $15.99</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-3 text-base text-muted-foreground font-bold">
              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between items-center"><span>Catfish Fillet</span><span>(2)</span></div>
                <div className="flex justify-between items-center"><span>Tilapia</span><span>(2)</span></div>
                <div className="flex justify-between items-center"><span>Ocean Perch</span><span>(2)</span></div>
                <div className="flex justify-between items-center"><span>Whole Jack</span><span>(2)</span></div>
                <div className="flex justify-between items-center"><span>Jack Fillet</span><span>(2)</span></div>
                <div className="flex justify-between items-center"><span>Chicken Tenders</span><span>(2)</span></div>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between items-center"><span>Whole Wings</span><span>(4)</span></div>
                <div className="flex justify-between items-center"><span>Jumbo Shrimp</span><span>(4)</span></div>
                <div className="flex justify-between items-center"><span>Regular Shrimp</span><span>(8)</span></div>
                <div className="flex justify-between items-center"><span>Catfish Nuggets</span></div>
                <div className="flex justify-between items-center"><span>Chicken Nuggets</span><span>(8)</span></div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-wrap gap-2">
            {item.prices.map((price, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-lg font-semibold text-[#ff8811]"
              >
                {price.size && (
                  <span className="text-[#ff8811] text-lg">{price.size}:</span>
                )}
                <span className="text-[#ff8811] font-bold text-xl">
                  ${price.price.toFixed(2)}
                </span>
              </span>
            ))}
          </div>
        )}
        {/* Ingredients Section */}
        {item.ingredients && (
          <div className="mt-4 text-sm text-muted-foreground">
            <strong>Ingredients:</strong> {item.ingredients.join(", ")}
          </div>
        )}
        {/* Description Section */}
        {item.description && (
          <p className="text-muted-foreground text-sm text-center mt-2">
            {item.id === 69
              ? item.options?.map((option: string, idx: number) =>
                  option === "Pepsi" || option === "Diet Pepsi" ? (
                    <span key={idx} style={{ color: '#005CB4', fontWeight: 'bold' }}>
                      {option}
                      {idx < item.options.length - 1 ? ', ' : ''}
                    </span>
                  ) : (
                    <span key={idx}>
                      {option}
                      {idx < item.options.length - 1 ? ', ' : ''}
                    </span>
                )
              )
              : item.description}
          </p>
        )}
      </div>
    </button>
  );
}
