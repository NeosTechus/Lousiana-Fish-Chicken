import { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
  imageUrl?: string;
}

export function MenuCard({ item, onClick, imageUrl }: MenuCardProps) {
  const isWingsCard = ([33, 34, 35, 36].includes(item.id)) && item.prices.length > 1;

  const isCustomCombo = item.id === 68;

  return (
    <button
      onClick={onClick}
      className={`menu-card w-full text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${isWingsCard ? 'lg:col-span-2 xl:col-span-2 max-w-xl mx-auto' : ''} ${isCustomCombo ? 'lg:col-span-2 xl:col-span-2 max-w-lg mx-auto border border-primary shadow-xl' : ''}`}
      style={isCustomCombo ? { minHeight: 340, minWidth: 320, padding: 20 } : isWingsCard ? { minHeight: 380 } : {}}
    >
      {/* Image Section */}
      <div className={`relative ${(isWingsCard || isCustomCombo) ? 'aspect-[3/2]' : 'aspect-[4/3]'} overflow-hidden ${isCustomCombo ? 'rounded-xl' : ''}`}>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ 
            backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
            backgroundColor: imageUrl ? undefined : 'hsl(var(--muted))'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
        {/* Item Number Badge */}
        <div className="absolute top-3 left-3 w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground font-bold text-lg rounded-full shadow-lg">
          {item.id}
        </div>
      </div>

      {/* Content Section */}
      <div className={`p-4 ${(isWingsCard || isCustomCombo) ? 'flex flex-col items-center' : ''} ${isCustomCombo ? 'pb-8 pt-6' : ''}`}>
        <h3 className={`font-display ${isCustomCombo ? 'text-3xl mb-4' : isWingsCard ? 'text-2xl' : 'text-lg'} font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-center`}>
          {item.name}
        </h3>
        {isCustomCombo && (
          <div className="text-base text-muted-foreground mb-3 text-center font-medium">
            Pick 2 Different Items - served with Fries and Can Soda
          </div>
        )}
        {/* Prices */}
        {isWingsCard ? (
          <table className="w-full text-base border-separate border-spacing-y-1">
            <tbody>
              {Array.from({ length: Math.ceil(item.prices.length / 2) }).map((_, rowIdx) => {
                const left = item.prices[rowIdx * 2];
                const right = item.prices[rowIdx * 2 + 1];
                return (
                  <tr key={rowIdx}>
                    <td className="pr-2 text-muted-foreground whitespace-nowrap text-right font-medium">{left?.size}</td>
                    <td className="pr-4 text-primary font-bold text-right pl-2">{left ? `$${left.price.toFixed(2)}` : ''}</td>
                    {right ? <><td className="pr-2 text-muted-foreground whitespace-nowrap text-right font-medium">{right.size}</td><td className="text-primary font-bold text-right pl-2">${right.price.toFixed(2)}</td></> : <><td></td><td></td></>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : isCustomCombo ? (
          <>
            <div className="flex flex-wrap gap-2 mb-2">
              {item.prices.map((price, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 text-base font-semibold text-primary"
                >
                  {price.size && (
                    <span className="text-muted-foreground">{price.size}:</span>
                  )}
                  ${price.price.toFixed(2)}
                </span>
              ))}
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 text-sm text-muted-foreground text-center">
              <li>2 Catfish Fillet</li>
              <li>2 Tilapia</li>
              <li>2 Ocean Perch</li>
              <li>2 Whole Jack</li>
              <li>2 Jack Fillet</li>
              <li>2 Chicken Tenders</li>
              <li>4 Whole Wings</li>
              <li>4 Jumbo Shrimp</li>
              <li>8 Regular Shrimp</li>
              <li>Catfish Nuggets</li>
              <li>8 Chicken Nuggets</li>
            </ul>
          </>
        ) : (
          <div className="flex flex-wrap gap-2">
            {item.prices.map((price, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-sm"
              >
                {price.size && (
                  <span className="text-muted-foreground">{price.size}:</span>
                )}
                <span className="text-primary font-semibold">
                  ${price.price.toFixed(2)}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}
