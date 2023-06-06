async function getData(){
  
  const res = await fetch('tmdb')
  if(!res.ok){
    throw new Error('Fetching Failed');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
    return (
      <>

      </>
    
    );
  }