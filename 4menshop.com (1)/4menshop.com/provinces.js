function getDistricts (proviceId){
	switch (parseInt(proviceId,10)){
			case 1:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="582">Thành Phố Long Xuyên</option><option value="583">Thành Phố Châu Đốc</option><option value="584">Huyện An Phú</option><option value="585">Huyện Tân Châu</option><option value="586">Huyện Phú Tân</option><option value="587">Huyện Châu Phú</option><option value="588">Huyện Tịnh Biên</option><option value="589">Huyện Tri Tôn</option><option value="590">Huyện Chợ Mới</option><option value="591">Huyện Châu Thành</option><option value="592">Huyện Thoại Sơn</option>';
				break;
			case 2:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="547">Thành phố Vũng Tàu</option><option value="548">Thành Phố Bà Rịa</option><option value="549">Huyện Châu Đức</option><option value="550">Huyện Xuyên Mộc</option><option value="551">Huyện Tân Thành</option><option value="552">Huyện Đất Đỏ</option><option value="553">Huyện Côn Đảo</option><option value="686">Huyện Long Điền</option>';
				break;
			case 7:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="215">Thành Phố Bắc Giang</option><option value="216">Huyện Yên Thế</option><option value="217">Huyện Tân Yên</option><option value="218">Huyện Lục Ngạn</option><option value="219">Huyện Hiệp Hòa</option><option value="220">Huyện Lạng Giang</option><option value="221">Huyện Sơn Động</option><option value="222">Huyện Lục Nam</option><option value="223">Huyện Việt Yên</option><option value="224">Huyện Yên Dũng</option>';
				break;
			case 8:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="155">Thành Phố Bắc Kạn</option><option value="156">Huyện Ba Bể</option><option value="157">Huyện Ngân Sơn</option><option value="158">Huyện Chợ Đồn</option><option value="159">Huyện Na Rì</option><option value="160">Huyện Bạch Thông</option><option value="161">Huyện Chợ Mới</option><option value="687">Huyện Pác Nặm</option>';
				break;
			case 61:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="661">Thành Phố Bạc Liêu</option><option value="662">Huyện Hồng Dân</option><option value="663">Huyện Vĩnh Lợi</option><option value="664">Huyện Giá Rai</option><option value="688">Huyện Đông Hải</option><option value="689">Huyện Phước Long</option><option value="690">Huyện Hoà Bình</option>';
				break;
			case 9:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="52">Thành Phố Bắc Ninh</option><option value="53">Huyện Yên Phong</option><option value="54">Huyện Quế Võ</option><option value="55">Huyện Tiên Du</option><option value="56">Thị Xã Từ Sơn</option><option value="57">Huyện Thuận Thành</option><option value="58">Huyện Lương Tài</option><option value="59">Huyện Gia Bình</option>';
				break;
			case 10:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="612">Thành Phố Bến Tre</option><option value="613">Huyện Châu Thành</option><option value="614">Huyện Chợ Lách</option><option value="615">Huyện Mỏ Cày Bắc</option><option value="616">Huyện Giồng Trôm</option><option value="617">Huyện Bình Đại</option><option value="618">Huyện Ba Tri</option><option value="619">Huyện Thạnh Phú</option><option value="691">Huyện Mỏ Cày nam</option>';
				break;
			case 3:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="522">Thành Phố Thủ Dầu Một</option><option value="523">Thị Xã Bến Cát</option><option value="524">Thị Xã Tân Uyên</option><option value="525">Thị Xã Thuận An</option><option value="692">Thị xã Dĩ An</option><option value="693">Huyện Bàu Bàng</option><option value="694">Huyện Bắc Tân Uyên</option><option value="695">Huyện Dầu Tiếng</option><option value="696">Huyện Phú Giáo</option>';
				break;
			case 4:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="788">Huyện Phú Riềng</option><option value="678">Thị xã Đồng Xoài</option><option value="697">Huyện Bù Đốp</option><option value="698">Huyện Bù Gia Mập</option><option value="699">huyện Chơn Thành</option><option value="700">Huyện Hớn Quảng</option><option value="506">Huyện Đồng Phú</option><option value="507">Thị Xã Phước Long</option><option value="508">Huyện Lộc Ninh</option><option value="509">Huyện Bù Đăng</option><option value="510">Thị Xã Bình Long</option>';
				break;
			case 5:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="537">Thành Phố Phan Thiết</option><option value="538">Huyện Tuy Phong</option><option value="539">Huyện Bắc Bình</option><option value="540">Huyện Hàm Thuận Bắc</option><option value="541">Huyện Hàm Thuận Nam</option><option value="542">Huyện Tánh Linh</option><option value="543">Huyện Hàm Tân</option><option value="544">Huyện Đức Linh</option><option value="545">Huyện Phú Qúy</option><option value="701">Thị xã La Gi</option>';
				break;
			case 6:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="397">Thành phố Quy Nhơn</option><option value="398">Huyện An Lão</option><option value="399">Huyện Hoài Nhơn</option><option value="400">Huyện Hoài Ân</option><option value="401">Huyện Phù Mỹ</option><option value="402">Huyện Vĩnh Thạnh</option><option value="403">Huyện Phù Cát</option><option value="404">Huyện Tây Sơn</option><option value="405">Thị Xã An Nhơn</option><option value="406">Huyện Tuy Phước</option><option value="407">Huyện Vân Canh</option>';
				break;
			case 12:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="666">Thành Phố Cà Mau</option><option value="667">Huyện Thới Bình</option><option value="668">Huyện U Minh</option><option value="669">Huyện Trần Văn Thời</option><option value="670">Huyện Cái Nước</option><option value="671">Huyện Đầm Dơi</option><option value="672">Huyện Ngọc Hiển</option><option value="702">huyện Năm Căn</option><option value="703">Huyện Phú Tân</option>';
				break;
			case 13:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="635">Huyện Vĩnh Thạnh</option><option value="636">Huyện Cờ Đỏ</option><option value="637">Quận Thốt Nốt</option><option value="638">Quận Ô Môn</option><option value="639">Huyện Phong Điền</option><option value="640">Quận Bình Thủy</option><option value="641">Quận Cái Răng</option><option value="642">Quận Ninh Kiều</option><option value="704">Huyện Thới Lai</option>';
				break;
			case 11:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="132">Thành Phố Cao Bằng</option><option value="133">Huyện Bảo Lạc</option><option value="134">Huyện Hà Quảng</option><option value="135">Huyện Thông Nông</option><option value="136">Huyện Trà Lĩnh</option><option value="137">Huyện Trùng Khánh</option><option value="138">Huyện Nguyên Bình</option><option value="139">Huyện Hoà An</option><option value="140">Huyện Quảng Uyên</option><option value="141">Huyện Hạ Lang</option><option value="142">Huyện Thạch An</option><option value="705">Huyện Phục Hòa</option><option value="706">Huyện Bảo Lâm</option>';
				break;
			case 14:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="681">Huyện Đăk Đoa</option><option value="682">Huyện Đăk Pơ</option><option value="683">Huyện Ia Pa</option><option value="684">Huyện Phú Thiện</option><option value="685">Huyện Chư Pưh</option><option value="434">Thành Phố Pleiku</option><option value="435">Huyện KBang</option><option value="436">Huyện Mang Yang</option><option value="437">Huyện Chư Păh</option><option value="438">Huyện Ia Grai</option><option value="439">Thị Xã An Khê</option><option value="440">Huyện Kông Chro</option><option value="441">Huyện Đức Cơ</option><option value="442">Huyện Chư Prông</option><option value="443">Huyện Chư Sê</option><option value="444">Thị Xã Ayun Pa</option><option value="445">Huyện Krông Pa</option>';
				break;
			case 15:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="121">Thành Phố Hà Giang</option><option value="122">Huyện Đồng Văn</option><option value="123">Huyện Mèo Vạc</option><option value="124">Huyện Yên Minh</option><option value="125">Huyện Quản Bạ</option><option value="126">Huyện Bắc Mê</option><option value="127">Huyện Hoàng Su Phì</option><option value="128">Huyện Vị Xuyên</option><option value="129">Huyện Xín Mần</option><option value="130">Huyện Bắc Quang</option><option value="707">Huyện Quang Bình</option>';
				break;
			case 16:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="85">Thành Phố Phủ Lý</option><option value="86">Huyện Duy Tiên</option><option value="87">Huyện Kim Bảng</option><option value="88">Huyện Lý Nhân</option><option value="89">Huyện Thanh Liêm</option><option value="90">Huyện Bình Lục</option>';
				break;
			case 17:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="2">Quận Ba Đình</option><option value="3">Quận Tây Hồ</option><option value="4">Quận Hoàn Kiếm</option><option value="5">Quận Hai Bà Trưng</option><option value="6">Quận Đống Đa</option><option value="7">Quận Thanh Xuân</option><option value="8">Quận Cầu Giấy</option><option value="9">Huyện Sóc Sơn</option><option value="10">Huyện Đông Anh</option><option value="11">Huyện Gia Lâm</option><option value="12">Huyện Hoài Đức</option><option value="13">Huyện Thanh Trì</option><option value="708">Quận Hà Đông</option><option value="709">Quận Nam Từ Liêm</option><option value="710">Quận Bắc Từ Liêm</option><option value="711">Quận Long Biên</option><option value="712">Quận Hoàng Mai</option><option value="713">Thị Xã Sơn Tây</option><option value="714">Huyện Ba Vì</option><option value="715">Huyện Chương Mỹ</option><option value="716">Huyện Đan Phượng</option><option value="717">Huyện Mê Linh</option><option value="718">Huyện Mỹ Đức</option><option value="719">Huyện Phúc Thọ</option><option value="720">Huyện Quốc Oai</option><option value="721">Huyện Thạch Thất</option><option value="722">Huyện Thanh Oai</option><option value="723">Huyện Thường Tín</option><option value="724">Huyện Ứng Hòa</option><option value="725">Huyện Phú Xuyên</option>';
				break;
			case 19:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="321">Thành Phố Hà Tĩnh</option><option value="322">Thị xã Hồng Lĩnh</option><option value="323">Huyện Nghi Xuân</option><option value="324">Huyện Đức Thọ</option><option value="325">Huyện Hương Sơn</option><option value="326">Huyện Can Lộc</option><option value="327">Huyện Thạch Hà</option><option value="328">Huyện Cẩm Xuyên</option><option value="329">Huyện Hương Khê</option><option value="330">Huyện Kỳ Anh</option><option value="726">Huyện Vũ Quang</option><option value="727">Huyện Lộc Hà</option><option value="793">Thị Xã Kỳ Anh</option>';
				break;
			case 22:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="61">Thành phố Hải Dương</option><option value="62">Thị Xã Chí Linh</option><option value="63">Huyện Nam Sách</option><option value="64">Huyện Thanh Hà</option><option value="65">Huyện Kinh Môn</option><option value="66">Huyện Kim Thành</option><option value="67">Huyện Gia Lộc</option><option value="68">Huyện Tứ Kỳ</option><option value="69">Huyện Cẩm Giàng</option><option value="70">Huyện Bình Giang</option><option value="71">Huyện Thanh Miện</option><option value="72">Huyện Ninh Giang</option>';
				break;
			case 23:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="15">Quận Hồng Bàng</option><option value="16">Quận Ngô Quyền</option><option value="17">Quận Lê Chân</option><option value="18">Quận Kiến An</option><option value="19">Quận Đồ Sơn</option><option value="20">Huyện Thuỷ Nguyên</option><option value="21">Huyện Kiến Thụy</option><option value="22">Huyện An Lão</option><option value="24">Huyện Tiên Lãng</option><option value="25">Huyện Vĩnh Bảo</option><option value="26">Huyện Cát Hải</option><option value="27">Huyện Bạch Long Vĩ</option><option value="728">Quận Dương Kinh</option><option value="729">Quận Hải An</option><option value="730">Huyện An Dương</option>';
				break;
			case 63:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="731">Thành Phố Vị Thanh</option><option value="732">Thị Xã Ngã Bảy</option><option value="733">Huyện Châu Thành A</option><option value="734">Huyện Châu Thành</option><option value="735">Huyện Phụng Hiệp</option><option value="736">Huyện Vị Thủy</option><option value="737">Huyện Long Mỹ</option>';
				break;
			case 20:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="262">Thành Phố Hòa Bình</option><option value="263">Huyện Đà Bắc</option><option value="264">Huyện Mai Châu</option><option value="265">Huyện Kỳ Sơn</option><option value="266">Huyện Lương Sơn</option><option value="267">Huyện Kim Bôi</option><option value="268">Huyện Tân Lạc</option><option value="269">Huyện Lạc Sơn</option><option value="270">Huyện Lạc Thủy</option><option value="271">Huyện Yên Thủy</option><option value="738">Huyện Cao Phong</option>';
				break;
			case 21:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="74">Thành Phố Hưng Yên</option><option value="75">Huyện Văn Lâm</option><option value="76">Huyện Mỹ Hào</option><option value="77">Huyện Yên Mỹ</option><option value="78">Huyện Văn Giang</option><option value="79">Huyện Khoái Châu</option><option value="80">Huyện Ân Thi</option><option value="81">Huyện Kim Động</option><option value="82">Huyện Phù Cừ</option><option value="83">Huyện Tiên Lữ</option>';
				break;
			case 25:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="417">Thành phố Nha Trang</option><option value="418">Huyện Vạn Ninh</option><option value="419">Thị Xã Ninh Hòa</option><option value="420">Huyện Diên Khánh</option><option value="421">Thành Phố Cam Ranh</option><option value="422">Huyện Khánh Vĩnh</option><option value="423">Huyện Khánh Sơn</option><option value="424">Huyện Trường Sa</option><option value="739">Huyện Cam Lâm</option>';
				break;
			case 27:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="621">Thành Phố Rạch Giá</option><option value="622">Huyện Kiên Lương</option><option value="623">Huyện Hòn Đất</option><option value="624">Huyện Tân Hiệp</option><option value="625">Huyện Châu Thành</option><option value="626">Huyện Giồng Riềng</option><option value="627">Huyện Gò Quao</option><option value="628">Huyện An Biên</option><option value="629">Huyện An Minh</option><option value="630">Huyện Vĩnh Thuận</option><option value="631">Huyện Phú Quốc</option><option value="632">Huyện Kiên Hải</option><option value="633">Thị xã Hà Tiên</option><option value="740">Huyện Giang Thành</option><option value="741">Huyện U Minh Thượng</option>';
				break;
			case 28:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="426">Thành Phố Kon Tum</option><option value="427">Huyện Đắk Glei</option><option value="428">Huyện Ngọc Hồi</option><option value="429">Huyện Đắk Tô</option><option value="430">Huyện Kon Plông</option><option value="431">Huyện Đắk Hà</option><option value="432">Huyện Sa Thầy</option><option value="742">Huyện Kon Rẫy</option><option value="743">Huyện Tu Mơ Rông</option><option value="789">Huyện H&#039;Drai</option>';
				break;
			case 29:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="744">Huyện Nậm Nhùn</option><option value="241">Thành Phố Lai Châu</option><option value="242">Huyện Mường Tè</option><option value="243">Huyện Phong Thổ</option><option value="244">Huyện Sìn Hồ</option><option value="245">Huyện Tam Đường</option><option value="246">Huyện Tân Uyên</option><option value="247">Huyện Than Uyên</option>';
				break;
			case 32:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="489">Thành phố Đà Lạt</option><option value="745">Huyện Đam Rông</option><option value="490">Thành Phố Bảo Lộc</option><option value="491">Huyện Lạc Dương</option><option value="492">Huyện Đơn Dương</option><option value="493">Huyện Đức Trọng</option><option value="494">Huyện Lâm Hà</option><option value="495">Huyện Bảo Lâm</option><option value="496">Huyện Di Linh</option><option value="497">Huyện Đạ Huoai</option><option value="498">Huyện Đạ Tẻh</option><option value="499">Huyện Cát Tiên</option>';
				break;
			case 33:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="163">Thành Phố Lạng Sơn</option><option value="164">Huyện Tràng Định</option><option value="165">Huyện Văn Lãng</option><option value="166">Huyện Bình Gia</option><option value="167">Huyện Bắc Sơn</option><option value="168">Huyện Văn Quan</option><option value="169">Huyện Cao Lộc</option><option value="170">Huyện Lộc Bình</option><option value="171">Huyện Chi Lăng</option><option value="172">Huyện Đình Lập</option><option value="173">Huyện Hữu Lũng</option>';
				break;
			case 31:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="144">Thành Phố Lào Cai</option><option value="145">Huyện Si Mai Ca</option><option value="146">Huyện Mường Khương</option><option value="147">Huyện Bát Xát</option><option value="148">Huyện Bắc Hà</option><option value="149">Huyện Bảo Thắng</option><option value="150">Huyện Sa Pa</option><option value="151">Huyện Bảo Yên</option><option value="153">Huyện Văn Bàn</option>';
				break;
			case 30:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="555">Thành Phố Tân An</option><option value="556">Huyện Tân Hưng</option><option value="557">Huyện Vĩnh Hưng</option><option value="558">Huyện Mộc Hóa</option><option value="559">Huyện Tân Thạnh</option><option value="560">Huyện Thạnh Hóa</option><option value="561">Huyện Đức Huệ</option><option value="562">Huyện Đức Hòa</option><option value="563">Huyện Bến Lức</option><option value="564">Huyện Thủ Thừa</option><option value="565">Huyện Châu Thành</option><option value="566">Huyện Tân Trụ</option><option value="567">Huyện Cần Đước</option><option value="568">Huyện Cần Giuộc</option><option value="746">Thị Xã Kiến Tường</option>';
				break;
			case 34:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="92">Thành phố Nam Định</option><option value="93">Huyện Vụ Bản</option><option value="94">Huyện Mỹ Lộc</option><option value="95">Huyện ý Yên</option><option value="96">Huyện Nam Trực</option><option value="97">Huyện Trực Ninh</option><option value="98">Huyện Xuân Trường</option><option value="99">Huyện Giao Thủy</option><option value="100">Huyện Nghĩa Hưng</option><option value="101">Huyện Hải Hậu</option>';
				break;
			case 35:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="301">Thành phố Vinh</option><option value="302">Thị xã Cửa Lò</option><option value="303">Huyện Quế Phong</option><option value="304">Huyện Quỳ Châu</option><option value="305">Huyện Kỳ Sơn</option><option value="306">Huyện Quỳ Hợp</option><option value="307">Huyện Nghĩa Đàn</option><option value="308">Huyện Tương Dương</option><option value="309">Huyện Quỳnh Lưu</option><option value="310">Huyện Tân Kỳ</option><option value="311">Huyện Con Cuông</option><option value="312">Huyện Yên Thành</option><option value="313">Huyện Diễn Châu</option><option value="314">Huyện Anh Sơn</option><option value="315">Huyện Đô Lương</option><option value="316">Huyện Thanh Chương</option><option value="317">Huyện Nghi Lộc</option><option value="318">Huyện Nam Đàn</option><option value="319">Huyện Hưng Nguyên</option><option value="747">Thị Xã Thái Hòa</option><option value="748">Thị Xã Hoàng Mai</option>';
				break;
			case 36:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="112">Thành Phố Ninh Bình</option><option value="113">Thị xã Tam Điệp</option><option value="114">Huyện Nho Quan</option><option value="115">Huyện Gia Viễn</option><option value="116">Huyện Hoa Lư</option><option value="117">Huyện Yên Mô</option><option value="118">Huyện Yên Khánh</option><option value="119">Huyện Kim Sơn</option>';
				break;
			case 37:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="749">Huyện Bác Ái</option><option value="750">Huyện Thuận Bắc</option><option value="751">Huyện Thuận Nam</option><option value="501">Thành Phố Phan Rang - Tháp Chàm</option><option value="502">Huyện Ninh Sơn</option><option value="503">Huyện Ninh Hải</option><option value="504">Huyện Ninh Phước</option>';
				break;
			case 38:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="202">Thành phố Việt Trì</option><option value="203">Thị xã Phú Thọ</option><option value="204">Huyện Đoan Hùng</option><option value="205">Huyện Hạ Hoà</option><option value="206">Huyện Thanh Ba</option><option value="207">Huyện Tam Nông</option><option value="208">Huyện Lâm Thao</option><option value="209">Huyện Phù Ninh</option><option value="210">Huyện Yên Lập</option><option value="211">Huyện Cẩm Khê</option><option value="212">Huyện Thanh Thuỷ</option><option value="213">Huyện Thanh Sơn</option><option value="752">Huyện Tân Sơn</option>';
				break;
			case 39:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="409">Thành phố Tuy Hòa</option><option value="410">Huyện Đồng Xuân</option><option value="411">Thị Xã Sông Cầu</option><option value="412">Huyện Tuy An</option><option value="413">Huyện Sơn Hòa</option><option value="414">Huyện Đông Hòa</option><option value="415">Huyện Sông Hinh</option><option value="676">Huyện Phú Hòa</option><option value="677">Huyện Tây Hoà</option>';
				break;
			case 40:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="332">Thành Phố Đồng Hới</option><option value="333">Huyện Tuyên Hóa</option><option value="334">Huyện Minh Hóa</option><option value="335">Huyện Quảng Trạch</option><option value="336">Huyện Bố Trạch</option><option value="337">Huyện Quảng Ninh</option><option value="338">Huyện Lệ Thủy</option><option value="790">Thị Xã Ba Đồn</option>';
				break;
			case 41:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="368">Thành Phố Tam Kỳ</option><option value="369">Thành Phố Hội An</option><option value="380">Huyện Núi Thành</option><option value="379">Huyện Phước Sơn</option><option value="756">Huyện Phú Ninh</option><option value="378">Huyện Tiên Phước</option><option value="753">Huyện Đông Giang</option><option value="754">Huyện Nam Giang</option><option value="755">Huyện Tây Giang</option><option value="377">Huyện Nam Trà My</option><option value="376">Huyện Quế Sơn</option><option value="375">Huyện Thăng Bình</option><option value="374">Huyện Hiệp Đức</option><option value="373">Huyện Duy Xuyên</option><option value="372">Huyện Điện Bàn</option><option value="371">Huyện Đại Lộc</option><option value="370">Huyện Nông Sơn</option><option value="381">Huyện Bắc Trà My</option>';
				break;
			case 42:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="383">Thành Phố Quảng Ngãi</option><option value="384">Huyện Lý Sơn</option><option value="385">Huyện Bình Sơn</option><option value="386">Huyện Trà Bồng</option><option value="387">Huyện Sơn Tịnh</option><option value="388">Huyện Sơn Tây</option><option value="389">Huyện Sơn Hà</option><option value="390">Huyện Tư Nghĩa</option><option value="391">Huyện Nghĩa Hành</option><option value="392">Huyện Minh Long</option><option value="393">Huyện Mộ Đức</option><option value="394">Huyện Đức Phổ</option><option value="395">Huyện Ba Tơ</option><option value="757">Huyện Tây Trà</option>';
				break;
			case 43:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="226">Thành phố Hạ Long</option><option value="227">Thành Phố Cẩm Phả</option><option value="228">Thành Phố Uông Bí</option><option value="229">Huyện Bình Liêu</option><option value="230">Thành Phố Móng Cái</option><option value="231">Huyện Đầm Hà</option><option value="232">Huyện Tiên Yên</option><option value="233">Huyện Ba Chẽ</option><option value="234">Huyện Vân Đồn</option><option value="235">Huyện Hoành Bồ</option><option value="236">Huyện Đông Triều</option><option value="237">Huyện Cô Tô</option><option value="238">Thị Xã Quảng Yên</option><option value="758">Huyện Hải Hà</option>';
				break;
			case 44:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="340">Thành Phố Đông Hà</option><option value="341">Thị xã Quảng Trị</option><option value="342">Huyện Vĩnh Linh</option><option value="343">Huyện Gio Linh</option><option value="344">Huyện Cam Lộ</option><option value="345">Huyện Triệu Phong</option><option value="346">Huyện Hải Lăng</option><option value="347">Huyện Hướng Hóa</option><option value="348">Huyện Đa Krông</option><option value="759">Huyện Đảo Cồn Cỏ</option>';
				break;
			case 62:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="653">Thành Phố Sóc Trăng</option><option value="654">Huyện Kế Sách</option><option value="655">Huyện Long Phú</option><option value="656">Huyện Mỹ Tú</option><option value="657">Huyện Mỹ Xuyên</option><option value="658">Huyện Thạnh Trị</option><option value="659">Huyện Vĩnh Châu</option><option value="760">Huyện Châu Thành</option><option value="761">Huyện Cù Lao Dung</option><option value="762">Huyện Ngã Năm</option><option value="763">Huyện Trần Đề</option>';
				break;
			case 45:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="256">Huyện Phù Yên</option><option value="257">Huyện Mai Sơn</option><option value="258">Huyện Sông Mã</option><option value="259">Huyện Yên Châu</option><option value="260">Huyện Mộc Châu</option><option value="251">Thành Phố Sơn La</option><option value="252">Huyện Quỳnh Nhai</option><option value="764">Huyện Sốp Cộp</option><option value="253">Huyện Mường La</option><option value="765">Huyện Vân Hồ</option><option value="254">Huyện Thuận Châu</option><option value="255">Huyện Bắc Yên</option>';
				break;
			case 53:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="512">Thành Phố Tây Ninh</option><option value="513">Huyện Tân Biên</option><option value="514">Huyện Tân Châu</option><option value="515">Huyện Dương Minh Châu</option><option value="516">Huyện Châu Thành</option><option value="517">Huyện Hòa Thành</option><option value="518">Huyện Bến Cầu</option><option value="519">Huyện Gò Dầu</option><option value="520">Huyện Trảng Bàng</option>';
				break;
			case 47:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="103">Thành Phố Thái Bình</option><option value="104">Huyện Quỳnh Phụ</option><option value="105">Huyện Hưng Hà</option><option value="106">Huyện Thái Thụy</option><option value="107">Huyện Đông Hưng</option><option value="108">Huyện Vũ Thư</option><option value="109">Huyện Kiến Xương</option><option value="110">Huyện Tiền Hải</option>';
				break;
			case 48:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="192">Thành phố Thái Nguyên</option><option value="193">Thành Phố Sông Công</option><option value="194">Huyện Định Hóa</option><option value="195">Huyện Võ Nhai</option><option value="196">Huyện Phú Lương</option><option value="197">Huyện Đồng Hỷ</option><option value="198">Huyện Đại Từ</option><option value="199">Huyện Phú Bình</option><option value="200">Thị Xã Phổ Yên</option>';
				break;
			case 46:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="273">Thành phố Thanh Hóa</option><option value="274">Thị xã Bỉm Sơn</option><option value="275">Thị xã Sầm Sơn</option><option value="276">Huyện Mường Lát</option><option value="277">Huyện Quan Hóa</option><option value="278">Huyện Quan Sơn</option><option value="279">Huyện Bá Thước</option><option value="280">Huyện Cẩm Thủy</option><option value="281">Huyện Lang Chánh</option><option value="282">Huyện Thạch Thành</option><option value="283">Huyện Ngọc Lặc</option><option value="284">Huyện Thường Xuân</option><option value="285">Huyện Như Xuân</option><option value="286">Huyện Như Thanh</option><option value="287">Huyện Vĩnh Lộc</option><option value="288">Huyện Hà Trung</option><option value="289">Huyện Nga Sơn</option><option value="290">Huyện Yên Định</option><option value="291">Huyện Thọ Xuân</option><option value="292">Huyện Hậu Lộc</option><option value="293">Huyện Thiệu Hoá</option><option value="294">Huyện Hoằng Hóa</option><option value="295">Huyện Đông Sơn</option><option value="296">Huyện Triệu Sơn</option><option value="297">Huyện Quảng Xương</option><option value="298">Huyện Nông Cống</option><option value="299">Huyện Tĩnh Gia</option>';
				break;
			case 49:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="350">Thành phố Huế</option><option value="351">Huyện Phong Điền</option><option value="352">Huyện Quảng Điền</option><option value="353">Huyện Hương Trà</option><option value="354">Huyện Phú Vang</option><option value="355">Huyện Hương Thủy</option><option value="356">Huyện Phú Lộc</option><option value="357">Huyện A Lưới</option><option value="358">Huyện Nam Đông</option>';
				break;
			case 50:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="594">Thành phố Mỹ Tho</option><option value="595">Thị xã Gò Công</option><option value="596">Huyện Tân Phước</option><option value="597">Huyện Châu Thành</option><option value="598">Huyện Cai Lậy</option><option value="599">Huyện Chợ Gạo</option><option value="600">Huyện Cái Bè</option><option value="601">Huyện Gò Công Tây</option><option value="602">Huyện Gò Công Đông</option><option value="766">Thị Xã Cai Lậy</option><option value="767">Huyện Tân Phú Đông</option>';
				break;
			case 24:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="475">Quận 10</option><option value="680">Quận Tân Phú</option><option value="679">Quận Bình Tân</option><option value="479">Quận Tân Bình</option><option value="485">Huyện Bình Chánh</option><option value="484">Huyện Hóc Môn</option><option value="486">Huyện Nhà Bè</option><option value="482">Quận Thủ Đức</option><option value="481">Quận Phú Nhuận</option><option value="487">Huyện Cần Giờ</option><option value="480">Quận Bình Thạnh</option><option value="483">Huyện Củ Chi</option><option value="478">Quận Gò Vấp</option><option value="477">Quận 12</option><option value="467">Quận 2</option><option value="468">Quận 3</option><option value="469">Quận 4</option><option value="470">Quận 5</option><option value="471">Quận 6</option><option value="472">Quận 7</option><option value="473">Quận 8</option><option value="474">Quận 9</option><option value="476">Quận 11</option><option value="466">Quận 1</option>';
				break;
			case 51:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="644">Thành Phố Trà Vinh</option><option value="645">Huyện Càng Long</option><option value="646">Huyện Châu Thành</option><option value="647">Huyện Cầu Kè</option><option value="648">Huyện Tiểu Cần</option><option value="649">Huyện Cầu Ngang</option><option value="650">Huyện Trà Cú</option><option value="651">Huyện Duyên Hải</option>';
				break;
			case 52:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="768">Huyện Lâm Bình</option><option value="175">Thành Phố Tuyên Quang</option><option value="176">Huyện Nà Hang</option><option value="177">Huyện Chiêm Hóa</option><option value="178">Huyện Hàm Yên</option><option value="179">Huyện Yên Sơn</option><option value="180">Huyện Sơn Dương</option>';
				break;
			case 54:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="604">Thành Phố Vĩnh Long</option><option value="605">Huyện Long Hồ</option><option value="606">Huyện Mang Thít</option><option value="607">Huyện Bình Minh</option><option value="608">Huyện Tam Bình</option><option value="609">Huyện Trà Ôn</option><option value="610">Huyện Vũng Liêm</option><option value="792">Huyện Bình Tân</option>';
				break;
			case 55:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="769">Thành Phố Vĩnh Yên</option><option value="770">Huyện Tam Đảo</option><option value="771">Huyện Sông Lô</option><option value="30">Huyện Lập Thạch</option><option value="31">Huyện Tam Dương</option><option value="32">Huyện Vĩnh Tường</option><option value="33">Huyện Yên Lạc</option><option value="34">Thị Xã Phúc Yên</option><option value="35">Huyện Bình Xuyên</option>';
				break;
			case 56:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="182">Thành Phố Yên Bái</option><option value="183">Thị xã Nghĩa Lộ</option><option value="184">Huyện Lục Yên</option><option value="185">Huyện Văn Yên</option><option value="186">Huyện Mù Căng Chải</option><option value="187">Huyện Trấn Yên</option><option value="188">Huyện Yên Bình</option><option value="189">Huyện Văn Chấn</option><option value="190">Huyện Trạm Tấu</option>';
				break;
			case 57:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="772">Quận Cẩm Lệ</option><option value="360">Quận Hải Châu</option><option value="361">Quận Thanh Khê</option><option value="362">Quận Sơn Trà</option><option value="363">Quận Ngũ Hành Sơn</option><option value="364">Quận Liên Chiểu</option><option value="365">Huyện Hoà Vang</option><option value="366">Huyện Hoàng Sa</option>';
				break;
			case 58:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="773">Thị Xã Buôn Hồ</option><option value="774">Huyện Cư Kuin</option><option value="447">Thành phố Buôn Ma Thuột</option><option value="448">Huyện Ea H&#039;leo</option><option value="449">Huyện Ea Súp</option><option value="450">Huyện Krông Năng</option><option value="451">Huyện Krông Búk</option><option value="452">Huyện Buôn Đôn</option><option value="453">Huyện Cư M&#039;gar</option><option value="454">Huyện Ea Kar</option><option value="455">Huyện M&#039;Đrắk</option><option value="456">Huyện Krông Pắc</option><option value="458">Huyện Krông ANa</option><option value="459">Huyện Krông Bông</option><option value="462">Huyện Lắk</option>';
				break;
			case 64:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="674">Thị xã Gia Nghĩa</option><option value="457">Huyện Cư Jút</option><option value="460">Huyện Đắk Mil</option><option value="461">Huyện Krông Nô</option><option value="775">Huyện Đăk Rlấp</option><option value="464">Huyện Đăk Glong</option><option value="673">Huyện Đắk Song</option><option value="675">Huyện Tuy Đức</option>';
				break;
			case 69:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="776">Thành Phố Điện Biên Phủ</option><option value="777">Thị Xã Mường Lay</option><option value="778">Huyện Điện Biên</option><option value="779">Huyện Điện Biên Đông</option><option value="780">Huyện Mường Ảng</option><option value="781">Huyện Mường Chà</option><option value="782">Huyện Mường Nhé</option><option value="783">Huyện Tủa Chùa</option><option value="784">Huyện Tuần Giáo</option><option value="791">Huyện Nậm Pồ</option>';
				break;
			case 59:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="527">Thành phố Biên Hòa</option><option value="528">Huyện Tân Phú</option><option value="529">Huyện Định Quán</option><option value="785">Huyện Cẩm Mỹ</option><option value="530">Huyện Vĩnh Cửu</option><option value="786">Huyện Trảng Bom</option><option value="531">Huyện Thống Nhất</option><option value="532">Thị Xã Long Khánh</option><option value="533">Huyện Xuân Lộc</option><option value="534">Huyện Long Thành</option><option value="535">Huyện Nhơn Trạch</option>';
				break;
			case 60:
				return '<option value="">--- Chọn quận/huyện ---</option><option value="787">Thị Xã Hồng Ngự</option><option value="570">Thành Phố Cao Lãnh</option><option value="571">Thành Phố Sa Đéc</option><option value="572">Huyện Tân Hồng</option><option value="573">Huyện Hồng Ngự</option><option value="574">Huyện Tam Nông</option><option value="575">Huyện Thanh Bình</option><option value="576">Huyện Tháp Mười</option><option value="577">Huyện Cao Lãnh</option><option value="578">Huyện Lấp Vò</option><option value="579">Huyện Lai Vung</option><option value="580">Huyện Châu Thành</option>';
				break;
	}}