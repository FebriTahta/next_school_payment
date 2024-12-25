export const formatDateTime = (isoString: string): {date: string; time: string} => {
    const date = new Date(isoString);
  
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
      'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'
    ];
  
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return {
      date: `${day}/${month}/${year} `,
      time: `${hours}:${minutes}`
    };
};
  
//   // Contoh penggunaan
//   const tanggalBayar = "2024-12-09T16:45:00.000Z";
//   console.log(formatDateTime(tanggalBayar)); // Output: 09 Desember 2024 16:45
  