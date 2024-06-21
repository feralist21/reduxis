import { useGetAllUsersQuery } from '../../services/users';

const Users = () => {
    const { data, error, isLoading } = useGetAllUsersQuery();

    return (
        <div className='flex flex-wrap gap-3 w-[600px]'>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    {data.users.map((user) => (
                        <div className='border-2 border-cyan-500 p-2 w-1/4' key={user.id}>
                            <h2 className='text-xl font-medium'>{user.firstName}</h2>
                            <p className='mt-1 text-base'>{user.role}</p>
                            <p className='mt-1 text-sm text-gray-400'>{user.email}</p>
                        </div>
                    ))}
                </>
            ) : null}
        </div>
    );
};

export default Users;
