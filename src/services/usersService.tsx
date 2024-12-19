import images from '../assets/images'

const usersService = [
    {
        userId: '1',
        userAccountId: '1',
        userCartId: '1',
        avatar: images.avt_user_1,
        nickName: 'trungvu',
        firstName: 'Vũ',
        lastName: 'Trung',
        address: 'Thanh Miện, Hải Dương',
        phone: '0987654321',
        birthday: '01/11/2002',
        sex: true
    },
    {
        userId: '2',
        userAccountId: '2',
        userCartId: '2',
        avatar: images.avt_user_2,
        nickName: 'phuongthao',
        firstName: 'Phương',
        lastName: 'Thảo',
        address: 'Hai Bà Trưng, Hà Nội',
        phone: '0912345678',
        birthday: '29/08/2005',
        sex: false
    }
]

export default usersService
