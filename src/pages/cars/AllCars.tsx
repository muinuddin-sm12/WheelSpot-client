import { useGetAllCarsQuery } from "@/redux/features/cars/carApi"

const AllCars = () => {
    const {data, isLoading} = useGetAllCarsQuery(undefined);
    if(isLoading){
      return <p>Loading...</p>
    }
  return (
    <div>hellow</div>
  )
}

export default AllCars