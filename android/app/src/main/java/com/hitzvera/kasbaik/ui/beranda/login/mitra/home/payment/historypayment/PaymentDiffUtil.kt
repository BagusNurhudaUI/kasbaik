package com.hitzvera.kasbaik.ui.beranda.login.mitra.home.payment.historypayment

import androidx.recyclerview.widget.DiffUtil
import com.hitzvera.kasbaik.response.PaymentItem
import com.hitzvera.kasbaik.response.tablePaymentResponse

class PaymentDiffUtil(
    private val oldList: List<PaymentItem>,
    private val newList: List<PaymentItem>
): DiffUtil.Callback() {
    override fun getOldListSize(): Int = oldList.size

    override fun getNewListSize(): Int = newList.size

    override fun areItemsTheSame(oldItemPosition: Int, newItemPosition: Int): Boolean =
        oldList[oldItemPosition].idPayment == newList[newItemPosition].idPayment

    override fun areContentsTheSame(oldItemPosition: Int, newItemPosition: Int): Boolean =
        oldList[oldItemPosition] == newList[newItemPosition]
}