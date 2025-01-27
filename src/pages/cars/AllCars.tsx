import { useGetAllCarsQuery } from "@/redux/features/cars/carApi"

const AllCars = () => {
    const {data, isLoading} = useGetAllCarsQuery(undefined);
    if(isLoading){
      return <p>Loading...</p>
    }
  return (
    <div className="min-h-screen">hellow</div>
  )
}

export default AllCars