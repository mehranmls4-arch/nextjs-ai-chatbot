'use client';

interface OrderSectionProps {
  selectedBranch: string | null;
}

export default function OrderSection({ selectedBranch }: OrderSectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ORDER <span className="text-orange-500">NOW</span>
        </h2>
        
        <p className="text-gray-300 text-lg mb-8">
          Tap to order on WhatsApp. We'll confirm in minutes.
        </p>

        {!selectedBranch ? (
          <div className="mb-8 p-4 bg-orange-500/20 border border-orange-500/50 rounded-lg">
            <p className="text-orange-300">Select a Branch First</p>
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.223-4.949 5.653-4.949 9.625 0 1.431.266 2.842.77 4.182L2.885 23.715l4.355-1.428c1.254.667 2.66 1.018 4.125 1.018h.004c5.084 0 9.094-4.009 9.094-9.093 0-2.429-.967-4.71-2.725-6.438-1.881-1.879-4.38-2.916-7.03-2.916z"/>
            </svg>
            Order on WhatsApp
          </button>
        </div>

        <p className="text-gray-400 text-sm mt-6">Free delivery inside city</p>
      </div>
    </section>
  );
}
