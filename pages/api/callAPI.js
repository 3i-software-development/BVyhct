import axios from 'axios';
import qs from 'qs';
import { useMutation, useQuery } from 'react-query';

export const GetPriceTable = () => {
  return useQuery(['getpricetable'], async () => {
    const response = await axios.get(`http://bvyhoccotruyenhadong.vn/wp-admin/admin-ajax.php?action=wp_ajax_ninja_tables_public_action&table_id=2358&target_action=get-all-data&default_sorting=new_first`);
    return response.data;
  });
};