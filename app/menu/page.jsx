export const dynamic = "force-dynamic"; // Needed for SSR with App Router

// Fetch menu items from Strapi
async function getMenuItems() {
  const res = await fetch("http://localhost:1337/api/menu-items?populate=*");
  const data = await res.json();
  return data.data || [];
}

export default async function MenuPage() {
  const menuItems = await getMenuItems();

  return (
    <main className="p-8 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-10">
        ☕ Starbucks Menu
      </h1>

      {menuItems.length === 0 ? (
        <p className="text-center text-gray-500">No menu items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menuItems.map((item) => {
            const { id, Name, Description, price, Image } = item;

            // Use thumbnail if available, fallback to full image
            const imageUrl = Image?.formats?.thumbnail?.url || Image?.url || null;

            return (
              <div
                key={id}
                className="bg-green-50 p-4 rounded-lg shadow hover:shadow-md transition"
              >
                {imageUrl && (
                  <img
                    src={`http://localhost:1337${imageUrl}`}
                    alt={Name}
                    className="w-full h-40 object-contain mb-3 rounded"
                  />
                )}
                <h2 className="text-xl font-semibold text-green-900">{Name.trim()}</h2>
                <p className="text-sm text-gray-600">{Description.trim()}</p>
                <p className="text-green-700 font-bold mt-2">₹{price}</p>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
