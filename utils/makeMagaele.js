// 把MagaEle 變更型態: bt_xink => BtXink

const arr=['ua_ximg','bt_xink','cd_xmcc','cl_xmmg','cy_rcln','clp_xips','int_xifm', 'int_xipt', 'st_xict', 'ic_xicn', 'ft_xier', 'hd_xmer',
'pge_xiay', 'lbx_xibx', 'lig_ximu', 'lig_xisd', 'pg_xion', 'tb_xitb', 'tb_xipg', 'th_xitl']


for (i=0; i<arr.length; i++) {
    const splitArr = arr[i].split('_')
    const componentName = splitArr[0].charAt(0).toUpperCase() + splitArr[0].slice(1) +
    splitArr[1].charAt(0).toUpperCase() + splitArr[1].slice(1)
    // console.log(`import ${componentName} from 'magaele/${arr[i]}';`)
    console.log(componentName+', ')
}

